const { When, Then, Given } = require('@wdio/cucumber-framework');
const RegisterPage = require('../../main/pageObject/register.page.js')

Given(/^system is display registr page title (.+)$/, async (title) => {
    await RegisterPage.registerPageHaveTitle(title);
})

When(/^user provide fist name (.+)$/, async (firstname) => {
    await RegisterPage.inputFirstName(firstname);
});

When(/^user provide last name (.+)$/, async (lastname) => {
    await RegisterPage.inputLastName(lastname)
});

When(/^user provide email (.+)$/, async (email) => {
    await RegisterPage.inputEmail(email)
});

When(/^user provide password (.+)$/, async (password) => {
    await RegisterPage.inputPassword(password)
});

When(/^user provide confirmation password (.+)$/, async (password) => {
    await RegisterPage.inputConfirmationPassword(password)
});

When(/^user click create an account button$/, async () => {
    await RegisterPage.clickOnCreateAnAccountButton();
});

Then(/^system register display success message is (.+)$/, async (message) => {
    await RegisterPage.successMessageIsHaveText(message);
});

Then(/^system register display error message: (.+)$/, async (message) => {
    await RegisterPage.errorMessageIsDisplayed(message);
});