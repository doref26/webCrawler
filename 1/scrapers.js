const { create } = require('domain');
const { read } = require('fs');
const puppeteer = require('puppeteer')


//Social Mention scrapes
async function PositiveSocMen(socialMentionPositive) {
    const browser = await pupeteer.launch();
    const page = await broeser.newPage();
    await page.goto(url);

    //<< social mention scraper >>
    // Positive scrapes
    const [posScr] = await page.$x('//*[@id="top_keywords"]/table/tbody/tr[1]/td[3]'); //x path selector
    const src1 = await posScr.getProperty('innerHTML');
    const positiveNum = await src1.jsonValue(); //stringifi data

    // Positive Strength
    const [posStr] = await page.$x('//*[@id="score_strength"]/div[1]'); //x path selector
    const src2 = await posStr.getProperty('innerHTML');
    const negativeNum = await src2.jsonValue(''); // 

    // Positive Passion
    const [posPas] = await page.$x('//*[@id="score_passion"]/div[1]'); //x path selector
    const src3 = await posPas.getProperty('innerHTML');
    const positivePassion = await src3.jsonValue(); // 

    console.log({ srcTxt }); //add values to array
}



async function NeutralSocMen(socialMentionNeutral) {
    const browser = await pupeteer.launch();
    const page = await broeser.newPage();
    await page.goto(url);

    //<< social mention scraper >>
    // Neutral Scrapes 
    const [neutScr] = await page.$x('//*[@id="top_keywords"]/table/tbody/tr[2]/td[3]'); //x path selector
    const src7 = await neutScr.getProperty('innerHTML');
    const neutralScrapes = await src7.jsonValue(); // 

    console.log({ srcTxt });
}



async function NegativeSocMen(socialMentionNegative) {
    const browser = await pupeteer.launch();
    const page = await broeser.newPage();
    await page.goto(url);

    //<< social mention scraper >>

    // Negative scrapes
    const [negScr] = await page.$x('//*[@id="top_keywords"]/table/tbody/tr[1]/td[3]'); //x path selector
    const src4 = await negScr.getProperty('innerHTML');
    const negativeScrapes = await src4.jsonValue(); // 

    // Negative Strength
    const [negStr] = await page.$x('//*[@id="score_strength"]/div[1]'); //x path selector
    const src5 = await negStr.getProperty('innerHTML');
    const negativeStrength = await src5.jsonValue(); // 

    // Negative Passion
    const [negPas] = await page.$x('//*[@id="score_passion"]/div[1]'); //x path selector
    const src6 = await negPas.getProperty('innerHTML');
    const negativePassion = await src6.jsonValue(); // 

    console.log({ srcTxt });
}



//<<Stock Price Scraper>>
async function StockPriceScraper(stockUrl) {
    const browser = await pupeteer.launch();
    const page = await broeser.newPage();
    await page.goto(url);

    //<< stock market scraper >>
    // Open Price
    const [opnPr] = await page.$x(''); //x path selector
    const src8 = await opnPr.getProperty('innerHTML');
    const openPrice = await src8.jsonValue(); // 

    // Closing Price
    const [clsPr] = await page.$x(''); //x path selector
    const src9 = await clsPr.getProperty('innerHTML');
    const closePrice = await src9.jsonValue(); // 

    // Day High
    const [dayH] = await page.$x(''); //x path selector
    const src10 = await dayH.getProperty('innerHTML');
    const dayHigh = await src10.jsonValue(); // 

    // Day Low
    const [dayL] = await page.$x(''); //x path selector
    const src11 = await dayL.getProperty('innerHTML');
    const dayLow = await src11.jsonValue(); // 

    console.log({ srcTxt });
}


//<<Get search word>>
function getSearchWord() {
    console.log("stock name \ symbol: ");
    const value = console.read();

    const socialMentionPositive = 'http://www.socialmention.com/search?t=all&q=' + value + '&btnG=Search&filter_sentiment=1';
    const socialMentionNeutral = 'http://www.socialmention.com/search?t=all&q=' + value + '&btnG=Search&filter_sentiment=0';
    const socialMentionNegative = 'http://www.socialmention.com/search?t=all&q=' + value + '&btnG=Search&filter_sentiment=-1';

    const stockUrl = '' + value + '';
}

getSearchWord();

PositiveSocMen(socialMentionPositive);
browser.close();

PositiveSocMen(socialMentionNeutral);
browser.close();

PositiveSocMen(socialMentionNegative);
browser.close();