Feature: Check items available to add to shopping cart

    As user I want to check if I could add to shopping cart any searched item.


    Scenario Outline: Perform a seach for <item> and add it to the shopping cart
        Given I navigate to Amazon home page
        And I type "<item>"
        And I click on search button
        When I see the results list for "<item>"
        And I navigate to page "<page>"
        And I select the item <index>
        And I see the description and add the item to shopping cart
        Then I see the confirmation message
        And I see the cart items count is "<itemsCount>"
        Examples:
            | item               | page | index | itemsCount |
            | iPhone 14 PRO      | 2    | 3     | 1          |
            | QA Automation book | 1    | 2     | 2          |