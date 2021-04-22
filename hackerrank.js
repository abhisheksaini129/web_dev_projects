const puppeteer = require("puppeteer");

let browser;
let page;

puppeteer
.launch({
    headless: false,
    defaultViewport:null,
    args:["--start-maximized"],
}).then(function (b){
    browser = b ;
    return browser.pages();
}).then(function(pages){
    page = pages[0];

    return page.goto("https://www.hackerrank.com/auth/login?h_l=body_middle_left_button&h_r=login");
}).then(function(){
    return page.type("#input-1","larake3851@ddwfzp.com");
}).then(function(){
    return page.type("#input-2","hackerrank");
}).then(function(){
    return Promise.all([
    page.click(
        ".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled"
    ),page.waitForNavigation(),
    ]);
}).then(function(){
    return page.waitForSelector("[title='Interview Preparation Kit']",{
        visible:true});
}).then(function(){
    return Promise.all([
    page.click(
        "[title='Interview Preparation Kit']"),
        page.waitForNavigation(),
    ]);
}).then(function(){
    return page.waitForSelector("[data-attr1='warmup']",{
        visible:true});
}).then(function(){
    return Promise.all([
            page.click(
                "[data-attr1='warmup']"),
                page.waitForNavigation(),
            ]);
}).then(function(){
    return page.waitForSelector(".ui-btn.ui-btn-normal.primary-cta.ui-btn-primary.ui-btn-styled",{
        visible:true});
}).then(function(){
    return Promise.all([
            page.click(
                ".ui-btn.ui-btn-normal.primary-cta.ui-btn-primary.ui-btn-styled"),
                page.waitForNavigation(),
            ]);
}).then(function(){
    return page.waitForSelector("[id='tab-1-item-4']",{
        visible:true});
}).then(function(){
    return Promise.all([
            page.click(
                "[id='tab-1-item-4']"),
                page.waitForNavigation(),
            ]);
})
.catch(function(err){
    console.log(err);
});

function lockbtn(){
    return new Promise (function (resolve,reject){
        page
        .waitForSelector(".ui-btn.ui-btn-normal.primary-cta.ui-btn-primary.ui-btn-styled")
        .then(function(){
            return page.click(".ui-btn.ui-btn-normal.primary-cta.ui-btn-primary.ui-btn-styled");
        })
        .then(function(){
            resolve();
        })
        .catch(function(err){
            resolve();
        });
        
    });
}