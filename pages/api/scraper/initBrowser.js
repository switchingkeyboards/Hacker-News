import puppeteer from 'puppeteer';

const initBrowser = async () => {
  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--disable-setuid-sandbox'],
    });
    return browser;
  } catch (err) {
    console.log('Could not create a browser instance: ', err);
  }
};

export default initBrowser;
