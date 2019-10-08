Feature: For sale
  As a user of Propertyrete
  I want to click on for sale page
  So that I can make any search.


  Scenario Outline:
    Given I navigate to the site "https://propertyrete.com"
    When I click on for sale page
    And enter "<Propname>", "<Bedroom>", "<Bathroom>","<Minprice>","<Maxprice>"
    And I click on search button
    Then the result "<result>"

    Examples: Valid for sale
      | Propname | Bedroom | Bathroom | Minprice | Maxprice | result             |
      | House    |3        |2         |No Min    |400,000    |0 properties found |
      | Flat     |1        |1         |No Min    |100,000    |0 properties found |


    Examples: Invalid for sale
      | Propname | Bedroom | Bathroom | Minprice | Maxprice | result |
      # No maximum price
      | House    |1        |3         |No Min    |No Max    |0 properties found  |
      # No bathroom selected
      | Flat     |4        |          |10,000    |100,000   |0 properties found  |