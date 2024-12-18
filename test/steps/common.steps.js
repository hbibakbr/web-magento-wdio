const { Given, When, Then } = require('@wdio/cucumber-framework');
const BasePage = require('../../main/pageObject/base.page.js');
const LoginPage = require('../../main/pageObject/login.page.js');

Given(/^user access page (.+)$/, async (url) => {
    await BasePage.navigateToHomeBase(url);
});

When(/^user click on sign in button base page$/, async () => {
    await BasePage.clickOnSignInButton();
});

Then(/^(.+) title is displayed$/, async (title) => {
    await LoginPage.loginPageHaveTitle(title);
});