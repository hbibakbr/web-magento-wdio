@regression @base
Feature: Base Page Functionality

  Scenario: Verify success access login page
    Given user access page https://magento.softwaretestingboard.com/
    When user click on sign in button base page
    Then Customer Login title is displayed
  