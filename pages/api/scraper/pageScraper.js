const url = 'https://news.ycombinator.com/';

const pageScraper = async (browser) => {
  // Open new page, visit url and wait for the data to load
  const page = await browser.newPage();
  await page.goto(url);
  await page.waitForSelector('.itemlist');

  const data = await page.evaluate(() => {
    // Return node list of all scraped table rows
    const rows = document.querySelectorAll('.athing');

    let dataArray = [];

    for (const row of rows) {
      // Scrape the subtext and split it up
      const mainText = row.childNodes[4].innerText.split(' ');
      const subText = row.nextSibling.innerText.trim().split(' | ');
      const leftSub = subText[0];
      const rightSub = subText[2];

      const leftSubArray = leftSub.split(' ');

      // Only get author if available, and get time depending on its position
      const author = leftSubArray.length === 7 ? leftSubArray[3] : null;
      const time = leftSubArray.length === 7 ? leftSubArray.splice(4, 3).join(' ') : leftSub;

      // Get title and link from main text
      const link = mainText[mainText.length - 1]?.replace(/[()]/g, ''); // Remove parenthesis
      mainText.pop(); // Remove link
      const title = mainText.join(' '); // Rejoin the rest of the elements to recreate the title

      // Parse out points and comment count and coerce into number
      const points = Number(leftSub[0]);
      const commentsCount = Number(rightSub?.replace(/.(comments|comment)/g, ''));

      // Accumulate each data object into an array
      dataArray.push({
        // rank: row.childNodes[1].innerText.replace('.', ''), // Remove periods
        title,
        points,
        author,
        time,
        link,
        commentsCount: commentsCount || 0, // Coerce,
      });
    }

    // Sort comment count in decreasing order
    dataArray.sort((a, b) => {
      return b.commentsCount - a.commentsCount;
    });

    return dataArray;
  });

  // Close browser session and return data object
  await browser.close();
  return data;
};

export default pageScraper;
