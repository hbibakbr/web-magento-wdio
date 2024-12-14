@regression @login
Feature: Home Page Functionality

  Scenario: Verify success access login page
    Given user on the home page
    When user click on sign in button
    Then Customer Login title is displayed
  