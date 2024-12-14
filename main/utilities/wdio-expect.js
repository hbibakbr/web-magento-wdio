const { $, expect } = require('@wdio/globals')

class WdioExpect {
    /**
     * Helper function to check if an element is Have Text
     * @param {string} selector - CSS or XPath selector for the element
     * @returns {boolean} True if the element is have text, false otherwise
     */
    async toHaveText(selector, expectedText) {
        try {
            const element = await $(selector);
            return expect(element).toHaveText(expectedText);
        } catch (error) {
            throw new Error(`toHaveText failed for selector '${selector}': ${error.message}`);
        }
    }

    /**
     * Helper function to check if an element to Be Displayed
     * @param {string} selector - CSS or XPath selector for the element
     * @returns {boolean} True if the element is displayed, false otherwise
     */
    async isDisplayed(selector) {
        try {
            const element = await $(selector);
            return expect(element).toBeDisplayed();
        } catch (error) {
            throw new Error(`isDisplayed failed for selector '${selector}': ${error.message}`);
        }
    }

    /**
     * Helper function to verify URL contains a specific path
     * @param {string} expectedPath - Path expected to be in the URL
     * @returns {boolean} True if the URL contains the path, false otherwise
     */
        async isUrlContains(expectedPath) {
            const currentUrl = await browser.getUrl();
            return currentUrl.includes(expectedPath);
        }
}

module.exports = new WdioExpect();