const puppeteer = require('puppeteer');
var url = "https://www.google.com/search?hl=en&as_q=who+is+bill+gates&as_epq=&as_oq=&as_eq=&as_nlo=&as_nhi=&lr=lang_en&cr=&as_qdr=all&as_sitesearch=&as_occt=any&safe=images&as_filetype=&as_rights=";
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.screenshot({ path: './screenshoots/page.png' });

    await browser.close();
})();