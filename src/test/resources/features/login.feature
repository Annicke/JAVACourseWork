Feature: login
  As a user
  I want to login
  so that I can use the site

  Background:
    Given I navigate to the site "https://propertyrete.com"
    When I click on login button

  Scenario: Valid login
    And I enter EmailAddress "blessings4u10@gmail.com",
    And I enter Password "12345hs "
    And I click on Sign in button
    Then I should be registered

  Scenario: Invalid login -Wrong Email
    And I enter wrong EmailAddress "sibaveun2016.@c "
    And I enter Password "12345hs "
    And I click on Sign in button
    Then Login button shows
   # And I am not registered


