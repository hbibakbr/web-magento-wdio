@regression @register
Feature: Register Functionality

    Scenario: Negative - Failed to Register with <case>
        Given user access page https://magento.softwaretestingboard.com/customer/account/create/
        And system is display registr page title Create New Customer Account
        When user provide fist name <firstname>
        And user provide last name <lastname>
        And user provide email <email>
        And user provide password <password>
        And user provide confirmation password <confirmPassword>
        And user click create an account button
        Then system register display error message: <error message>
        Examples:
            | case                     | firstname   | lastname     | email               | password        | confirmPassword  | error message                                                                                                                                                |
            | existing email           | hallo       | tester       | halotest@test.com   | Secret_pass.123 | Secret_pass.123  | There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account. |
            | invalid format password  | hallo       | tester       | halotest@test.com   | secretpass      | secretpass       | Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.                      |
            | short password           | hallo       | tester       | halotest@test.com   | pass            | pass             | Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.                                           |
    
    Scenario: Positive - Register Successfully
        Given user access page https://magento.softwaretestingboard.com/customer/account/create/
        And system is display registr page title Create New Customer Account
        When user provide fist name <firstname>
        And user provide last name <lastname>
        And user provide email <email>
        And user provide password <password>
        And user provide confirmation password <confirmPassword>
        And user click create an account button
        Then system register display success message is <message>
        Examples:
            | firstname   | lastname          | email            | password        | confirmPassword     | message                                            |
            | hallo       | tester            | random_email     | Secret_pass.123 | Secret_pass.123     | Thank you for registering with Main Website Store. |