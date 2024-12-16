const wdioAction = require('../utilities/wdio-helpers.js');
const wdioExpect = require('../utilities/wdio-expect.js');

class LoginPage {
    // Selector
    get loginPageTitle() { 
        return '.base'; 
    }

    get emailField() { 
        return 'input[id=email]'; 
    }

    get emailError() { 
        return 'div[id=email-error]'; 
    }

    get passwordField() { 
        return 'input[id=pass]'; 
    }

    get signInButton() { 
        return 'button[id=send2]'; 
    }

    get errorMessage() { 
        return 'div[role=alert]'; 
    }

    get iconCart() { 
        return 'a[class="action showcart"]'; 
    }

    // Method
    async inputEmail(text) {
        await wdioAction.enterText(this.emailField, text);
    }

    async inputPassword(text) {
        await wdioAction.enterText(this.passwordField, text);
    }

    async clickOnSignInButton() {
        await wdioAction.clickOn(this.signInButton);
    }

    async loginPageHaveTitle(title) {
        await wdioExpect.toHaveText(this.loginPageTitle, title);
    }

    async errorEmailIsHaveText(message) {
        await wdioExpect.toHaveText(this.emailError, message);
    }

    async errorMessageIsHaveText(message) {
        await wdioExpect.toHaveText(this.errorMessage, message);
    }

    async errorMessageOrEmailErrorIsHaveText(message) {
        try {
            await this.errorMessageIsHaveText(message);
        } catch (e) {
            await this.errorEmailIsHaveText(message);
        }
    }
    

    async iconCartIsDisplayed() {
        await wdioExpect.isDisplayed(this.iconCart);
    }
}

module.exports = new LoginPage();