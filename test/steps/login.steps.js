const { When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../../main/pageObject/login.page.js')

When(/^user input email (.+)$/, async (email) => {
    await LoginPage.inputEmail(email);
});

When(/^user input password (.+)$/, async (password) => {
    await LoginPage.inputPassword(password);
});

When(/^user click sign in button$/, async () => {
    await LoginPage.clickOnSignInButton();
});

Then(/^system login display error message: (.+)$/, async (message) => {
    await LoginPage.errorMessageIsDisplayed(message);
});

Then(/^icon cart is displayed$/, async () => {
    await LoginPage.iconCartIsDisplayed();
});