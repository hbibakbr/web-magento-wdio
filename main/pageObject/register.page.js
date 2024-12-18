const wdioAction = require('../utilities/wdio-helpers.js');
const wdioExpect = require('../utilities/wdio-expect.js');
const { generateRandomEmail } = require('../utilities/random-email.js')

class RegisterPage {

    // Object Selector
    get registerPageTitle () {
        return 'span[data-ui-id=page-title-wrapper]';
    }

    get fieldSetInformation () {
        return 'fieldset[class="fieldset create info"]'
    }

    get fieldSetCreateAccount () {
        return 'fieldset[class="fieldset create account"]'
    }

    get firstNameField () {
        return 'input[id=firstname]'
    }

    get lastNameField () {
        return 'input[id=lastname]'
    }

    get emailField () {
        return 'input[id=email_address]'
    }

    get passwordField () {
        return 'input[id=password]'
    }

    get confirmPasswordField () {
        return 'input[id=password-confirmation]'
    }

    get createAnAccountButton () {
        return 'button[class="action submit primary"]'
    }

    get successMessage () {
        return 'div[data-ui-id="message-success"]'
    }

    get errorMessage () {
        return 'div[data-ui-id="message-error"]'
    }

    get passwordError () {
        return 'div[id=password-error]'
    }

    //Method Action
    async inputFirstName (firstname) {
        await wdioAction.enterText(this.firstNameField, firstname)
    }

    async inputLastName (lastname) {
        await wdioAction.enterText(this.lastNameField, lastname)
    }

    async inputEmail (email) {
        await wdioAction.scrollToElement(this.emailField)

        if (email === 'random_email') {
            email = generateRandomEmail()
            console.log(`Generated random email: ${email}`); // Debugging
        }

        await wdioAction.enterText(this.emailField, email)
    }

    async inputPassword (password) {
        await wdioAction.scrollToElement(this.passwordField)
        await wdioAction.enterText(this.passwordField, password)
    }

    async inputConfirmationPassword (password) {
        await wdioAction.scrollToElement(this.confirmPasswordField)
        await wdioAction.enterText(this.confirmPasswordField, password)
    }

    async clickOnCreateAnAccountButton () {
        await wdioAction.scrollToElement(this.createAnAccountButton)
        await wdioAction.clickOn(this.createAnAccountButton)
    }

    //Method Assertion
    async registerPageHaveTitle (title) {
        await wdioExpect.toHaveText(this.registerPageTitle, title);
    }

    async fieldSetInformationIsDisplay () {
        await wdioExpect.isDisplayed(this.fieldSetInformation);
    }

    async fieldSetCreateAccountIsDisplay () {
        await wdioExpect.isDisplayed(this.fieldSetCreateAccount);
    }

    async successMessageIsHaveText (message) {
        await wdioExpect.toHaveText(this.successMessage, message)
    }

    async errorMessageIsHaveText (message) {
        await wdioExpect.toHaveText(this.errorMessage, message)
    }

    async errorPasswordIsHaveText (message) {
        await wdioExpect.toHaveText(this.passwordError, message)
    }

    async errorMessageIsDisplayed(message) {
        const isErrorMessagePresent = await wdioAction.isExisting(this.errorMessage)
        if (isErrorMessagePresent) {
            await this.errorMessageIsHaveText(message)
        } else {
            const isPasswordErrorPresent = await wdioAction.isExisting(this.passwordError);
            if (isPasswordErrorPresent) {
                await this.errorPasswordIsHaveText(message)
            }
        }
    }
}

module.exports= new RegisterPage();