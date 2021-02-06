@ignore @e2e
Feature: Ignored test
  Scenario: Any scenario

    Given go to home page
    When fill "q" field-name with "dogs" value
    And clicks "#search-button" selector
    Then selector ".refine_menu" is present
