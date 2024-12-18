const { $, browser } = require('@wdio/globals')
class WdioHelper {

    /**
     * Helper function to click on an element
     * @param {string} url - Home base url
     */
    async navigateToUrl(url) {
        try {
            await browser.maximizeWindow();
            await browser.url(url);
            await browser.waitUntil(
                () => browser.execute(() => document.readyState === 'complete'),
                {
                    timeout: 10000,
                    timeoutMsg: 'Halaman tidak sepenuhnya dimuat',
                }
            );
        } catch (error) {
            console.error('Error navigating to URL:', error.message);
            throw error;
        }
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
        await element.setValue(text);
    }

    /**
     * Helper function to check if an element to Be Displayed
     * @param {string} selector - CSS or XPath selector for the element
     * @returns {boolean} True if the element is exist, false otherwise
     */
    async isExisting(selector) {
        try {
            const element = await $(selector);
            return element.isExisting();
        } catch (error) {
            throw new Error(`isExisting failed for selector '${selector}': ${error.message}`);
        }
    }
}

module.exports = new WdioHelper();
