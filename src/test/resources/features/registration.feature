Feature: Registration
  As a user
  I want to register
  so that I can use the site

 Background:
   Given I navigate to the site "https://propertyrete.com"
   When I click on register


  Scenario Outline: Valid & Invalid registration
    And I enter "<FirstName>","<LastName>","<EmailAddress>","<MobileNumber>","<Password>","<ConfirmPassword>"
    And I click on create account
    Then The message "<messages>" is displayed

    Examples: Valid registration
      | FirstName | LastName | EmailAddress              | MobileNumber | Password | ConfirmPassword | messages |
      |Anne       |Mensi     |blessings4u10@gmail.com    |07575555555   |12345hs   |12345hs          |The Captcha field is required. |
      |Annicke    |grandi    |gif@myautomation.33mail.com|07576543212   |12345hs   |12345hs          |The Captcha field is required. |


    Examples: Invalid registration
      | FirstName | LastName | EmailAddress              | MobileNumber | Password | ConfirmPassword | messages                                                   |
      # wrong email
        |Anne       |Mensi     |blessings4u10@gm.om      |07575555555   |12345hs   |12345hs         |The Email Address field must contain a valid email address.  |
      # uncorresponding password
      |Annicke    |grandi    |gif@myautomation.33mail.com|07576543212   |12345hs   |1234            |The Confirm Password field does not match the Password field.|