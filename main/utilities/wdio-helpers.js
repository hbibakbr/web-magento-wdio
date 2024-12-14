const { $, browser } = require('@wdio/globals')
class WdioHelper {

    /**
     * Helper function to click on an element
     * @param {string} url - Home base url
     */
    async navigateToUrl(url) {
        await browser.maximizeWindow();
        await browser.url(url);
    }

    /**
     * Helper function to click on an element
     * @param {string} selector - CSS or XPath selector for the element
     */
    async clickOn(selector) {
        const element = await $(selector);
        await element.waitForClickable({ timeout: 5000 });
        await element.click();
    }

    /**
     * Helper function to scroll to an element
     * @param {string} selector - CSS or XPath selector for the element
     */
    async scrollToElement(selector) {
        const element = await $(selector);
        await element.scrollIntoView();
    }

    /**
     * Helper function to set value for an input field
     * @param {string} selector - CSS or XPath selector for the input field
     * @param {string} value - Value to set in the input field
     */
    async enterText(selector, text) {
        const element = await $(selector);
        await element.waitForDisplayed();
        await element.setValue(value);
    }
}

module.exports = new WdioHelper();
