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
        await page.waitForSelector('#app > div > div.zZJcFiYp1GsQ-Zkcz02eC > div.mXEfuMleN9V2Rx6d6qvsu > div._2aSECY2_aC8BM-pa12gLyl > div > div > div._3O5VW6cr2qOqPhMqw-gxyk.css-44 > div.body-40 > div > div > div > div > div > div.ms-OverflowSet.ms-CommandBar-primaryCommand.primarySet-48 > div:nth-child(2) > div > div > button')
        await page.click('#app > div > div.zZJcFiYp1GsQ-Zkcz02eC > div.mXEfuMleN9V2Rx6d6qvsu > div._2aSECY2_aC8BM-pa12gLyl > div > div > div._3O5VW6cr2qOqPhMqw-gxyk.css-44 > div.body-40 > div > div > div > div > div > div.ms-OverflowSet.ms-CommandBar-primaryCommand.primarySet-48 > div:nth-child(2) > div > div > button')
        await page.waitForSelector('#ReadingPaneContainerId > div > div > div > div._17WvdmDfhREFqBNvlLv75X > div._3Ot6xv41uIO58lh-I36wdt > div:nth-child(1) > div > div.mKl0Jm0rZWFpSjB8Sy4mA > div > div > div > div > div.ms-FocusZone.css-41 > div > div > input')
        await page.click('#ReadingPaneContainerId > div > div > div > div._17WvdmDfhREFqBNvlLv75X > div._3Ot6xv41uIO58lh-I36wdt > div:nth-child(1) > div > div.mKl0Jm0rZWFpSjB8Sy4mA > div > div > div > div > div.ms-FocusZone.css-41 > div > div > input')
        await page.keyboard.type('hegedusbarby@gmail.com')
        await page.keyboard.press('Enter')
        await page.waitForSelector('#ReadingPaneContainerId > div > div > div > div._17WvdmDfhREFqBNvlLv75X > div._3Ot6xv41uIO58lh-I36wdt > div._17TXFBLwNSbFtzG-omWTmr')
        await page.click('#ReadingPaneContainerId > div > div > div > div._17WvdmDfhREFqBNvlLv75X > div._3Ot6xv41uIO58lh-I36wdt > div._17TXFBLwNSbFtzG-omWTmr')
        await page.keyboard.type('Creat a test')
        await page.click('#ReadingPaneContainerId > div > div > div > div._17WvdmDfhREFqBNvlLv75X > div.bAHScQgzLTvwiV2QXvzpa._2kZu_nrsBS0LQbV-DFQuPl')
        await page.keyboard.type('Hello guys!')
        await page.waitForSelector('#ReadingPaneContainerId > div > div > div > div._17WvdmDfhREFqBNvlLv75X > div._2N3UjcFHJvQ4TrTbRjlQQS._2g4pIUt1rpnHn-PxxHd_Ax > div._2lZKVTlKQHL73XA8DpEzAW > div._2ELnTBajF7jzj_m_hoj3Xt > div > span > button.ms-Button.ms-Button--primary.ms-Button--hasMenu._3BlbI7rjg2J-d7fY98r7tp._3aJ_30-S6Xl7nZRnkPaTOF.root-203 > span')
        await page.click('#ReadingPaneContainerId > div > div > div > div._17WvdmDfhREFqBNvlLv75X > div._2N3UjcFHJvQ4TrTbRjlQQS._2g4pIUt1rpnHn-PxxHd_Ax > div._2lZKVTlKQHL73XA8DpEzAW > div._2ELnTBajF7jzj_m_hoj3Xt > div > span > button.ms-Button.ms-Button--primary.ms-Button--hasMenu._3BlbI7rjg2J-d7fY98r7tp._3aJ_30-S6Xl7nZRnkPaTOF.root-203 > span')
        await page.waitForSelector('#app > div > div.zZJcFiYp1GsQ-Zkcz02eC > div.mXEfuMleN9V2Rx6d6qvsu > div._2aSECY2_aC8BM-pa12gLyl > div > div > div._3O5VW6cr2qOqPhMqw-gxyk.css-44 > div.body-40 > div > div > div > div > div > div.ms-OverflowSet.ms-CommandBar-primaryCommand.primarySet-48 > div:nth-child(1) > div > button')
        await page.click('#app > div > div.zZJcFiYp1GsQ-Zkcz02eC > div.mXEfuMleN9V2Rx6d6qvsu > div._2aSECY2_aC8BM-pa12gLyl > div > div > div._3O5VW6cr2qOqPhMqw-gxyk.css-44 > div.body-40 > div > div > div > div > div > div.ms-OverflowSet.ms-CommandBar-primaryCommand.primarySet-48 > div:nth-child(1) > div > button')
        await page.waitForSelector('body > div:nth-child(25) > div > div > div > div.ms-Panel-main.main-446 > div.ms-Panel-contentInner.contentInner-449 > div > div > div > div.ms-FocusZone.css-41._1pt2s8kmwigdIS44ocdqXr._2u7Svn_BdDawtCwNsqEtQP.customScrollBar.disableTextSelection > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div')
        await page.click('body > div:nth-child(25) > div > div > div > div.ms-Panel-main.main-446 > div.ms-Panel-contentInner.contentInner-449 > div > div > div > div.ms-FocusZone.css-41._1pt2s8kmwigdIS44ocdqXr._2u7Svn_BdDawtCwNsqEtQP.customScrollBar.disableTextSelection > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div')
        await page.waitForSelector('#app > div > div.zZJcFiYp1GsQ-Zkcz02eC > div.mXEfuMleN9V2Rx6d6qvsu > div._2aSECY2_aC8BM-pa12gLyl > div > div > div._3O5VW6cr2qOqPhMqw-gxyk.css-44 > div.body-40 > div > div > div > div > div > div.ms-OverflowSet.ms-CommandBar-primaryCommand.primarySet-48 > div:nth-child(3) > button > span')
        await page.click('#app > div > div.zZJcFiYp1GsQ-Zkcz02eC > div.mXEfuMleN9V2Rx6d6qvsu > div._2aSECY2_aC8BM-pa12gLyl > div > div > div._3O5VW6cr2qOqPhMqw-gxyk.css-44 > div.body-40 > div > div > div > div > div > div.ms-OverflowSet.ms-CommandBar-primaryCommand.primarySet-48 > div:nth-child(3) > button > span')
        await page.waitForSelector('#ok-1 > span')
        await page.click('#ok-1 > span')

    } catch (error) {
        console.log(error)
    }
})()