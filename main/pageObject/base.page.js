const wdioAction = require('../utilities/wdio-helpers.js');
const wdioExpect = require('../utilities/wdio-expect.js');

class BasePage {
    
    // Selector
    get signInButton() { 
        return '//ul[@class="header links"]//li[2]'; 
    }

    get authPageTitle() { 
        return '.base'; 
    }

    // Method
    async navigateToHomeBase() {
        await wdioAction.navigateToUrl('/');
    }

    async clickOnSignInButton() {
        await wdioAction.clickOn(this.signInButton);
    }

    async loginPageHaveTitle(title) {
        await wdioExpect.toHaveText(this.authPageTitle, title);
    }
}

module.exports = new BasePage();
