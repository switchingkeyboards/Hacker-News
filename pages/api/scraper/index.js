import pageScraper from './pageScraper';
import initBrowser from './initBrowser';

const scraper = async () => {
  // Initializing browser instance
  const browser = await initBrowser();
  // Pass the browser instance to the scraper
  try {
    const data = await pageScraper(browser);
    return data;
  } catch (error) {
    console.log('Error starting scraping: ', error);
  }
};

export default scraper;
