const puppeteer = require('puppeteer');
const express = require("express");
const app = express();

app.get("/:id", (req, res) => {
    var param = req.params.id;
    console.log(param);
    var url = "https://www.google.com/search?hl=en&as_q=who+is+bill+gates&as_epq=&as_oq=&as_eq=&as_nlo=&as_nhi=&lr=lang_en&cr=&as_qdr=all&as_sitesearch=&as_occt=any&safe=images&as_filetype=&as_rights=";
    (async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url);
        await page.screenshot({ path: './screenshoots/' + param + '.png' });

        await browser.close();
    })();
    res.setHeader("Content-Type", "application/json");
    res.end(
        JSON.stringify({
            data: param
        })
    );

})
app.get("/", (req, res) => {
    res.send("Data From Google");
});

app.listen(process.env.PORT || 4000);