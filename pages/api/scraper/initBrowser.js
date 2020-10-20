import puppeteer from 'puppeteer';

const initBrowser = async () => {
  try {
    const browser = await puppeteer.launch({
      product: 'firefox',
      headless: true,
      args: ['--disable-setuid-sandbox', '--no-sandbox', '--disable-dev-shm-usage'],
    });
    return browser;
  } catch (err) {
    console.log('Could not create a browser instance: ', err);
  }
};

export default initBrowser;
