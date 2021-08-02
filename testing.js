const puppeteer = require('puppeteer');

( async () => {

    const browser = await puppeteer.launch({ headless: false, slowMo: 100, devtools: false });

    try{
        
        const page = await browser.newPage()

        await page.goto('http://outlook.live.com/owa/')
        await page.waitForSelector('body > header > div > aside > div > nav > ul > li:nth-child(2) > a')
        await page.click('body > header > div > aside > div > nav > ul > li:nth-child(2) > a')
        await page.waitForSelector('#i0116')
        await page.click('#i0116')
        await page.keyboard.type('testing123@outlook.hu')
        await page.keyboard.press('Enter')
        await page.waitForSelector('#i0118')
        await page.click('#i0118')
        await page.keyboard.type('Teszt123!')
        await page.keyboard.press('Enter')
        await page.waitForSelector('#idBtn_Back')
        await page.click('#idBtn_Back')
        

    } catch (error) {
        console.log(error)
    }
})()