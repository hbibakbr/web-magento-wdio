const wdioAction = require('../utilities/wdio-helpers.js');
const wdioExpect = require('../utilities/wdio-expect.js');

class BasePage {
    
    // Selector
    get signInButton() { 
        return '//ul[@class="header links"]//li[2]'; 
    }

    get customerMenu() {
        return 'button[data-action="customer-menu-toggle"]'
    }

    // Method
    async navigateToHomeBase(url) {
        await wdioAction.navigateToUrl(url);
    }

    async clickOnSignInButton() {
        await wdioAction.clickOn(this.signInButton);
    }
}

module.exports = new BasePage();
