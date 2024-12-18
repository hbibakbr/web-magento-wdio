@regression @login
Feature: Login Functionality
            
    Scenario: Negative - Failed to Login with <case>
        Given user access page https://magento.softwaretestingboard.com/customer/account/login
        When user input email <email>
        And user input password <password>
        And user click sign in button
        Then system login display error message: <error message>

        Examples:
        | case               | email                    | password             | error message                                                                                                   |
        | invalid password   | testerandalan@test.com   | secret_pass          | The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.     |
        | invalid email      | testerandalantest.com    | Password.123         | Please enter a valid email address (Ex: johndoe@domain.com).                                                    |

    Scenario: Positive - Login Successfully
        Given user access page https://magento.softwaretestingboard.com/customer/account/login
        When user input email <email>
        And user input password <password>
        And user click sign in button
        Then icon cart is displayed

        Examples:
            | email                    | password             |
            | testerandalan@test.com   | Password.123         |