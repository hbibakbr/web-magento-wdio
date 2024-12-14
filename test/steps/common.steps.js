const { Given, When, Then } = require('@wdio/cucumber-framework');
const BasePage = require('../../main/pageObject/base.page.js');

Given(/^user on the home page$/, async () => {
    await BasePage.navigateToHomeBase();
});

When(/^user click on sign in button$/, async () => {
    await BasePage.clickOnSignInButton();
});

Then(/^(.+) title is displayed$/, async (title) => {
    await BasePage.loginPageHaveTitle(title);
});