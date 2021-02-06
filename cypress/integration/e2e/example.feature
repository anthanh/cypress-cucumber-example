@e2e
Feature: Home and Product navigable
  Scenario: Load home page and search something

    Given go to home page
    And close subscribe popup 
    When fill "q" field-name with "cats" value
    And clicks "#search-button" selector
    Then selector ".refine_menu" is present

    When go to "500959690633514020" product page
    Then selector ".add_to_cart" is present
