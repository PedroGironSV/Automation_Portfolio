Feature: User Registration and Login

    I want to register a new user on demo.casino web site
    and also be able to perform a successful login with a valid account.

    Background: Load home page
        Given I navigate to demo.casino web site
        When I can see the Welcome message
        Then I close the Welcome message card

    Scenario Outline: Register a new user - Successful scenario
        Given I click on Sing Up button
        When I type my email "<email>" and password "<password>"
        And I select my rather currency "<currency>"
        Then I complete the registration form
        And I select the Create Account button
        Then I can see a successful registration message: "<successRegMessage>"
        Examples:
            | email                | password  | currency | successRegMessage                                                      |
            | testmail02@gmail.com | pa$Test01 | EUR      | Registration successfully finished! Confirmation has been sent to you. |

    Scenario Outline: Register a new user - Failed scenario
        Given I click on Sing Up button
        When I type a registered email "<registeredEmail>" and password "<password>"
        And I select my rather currency "<currency>"
        Then I complete the registration form
        And I select the Create Account button
        Then I get an error message: "<failedRegMessage>"
        Examples:
            | registeredEmail | password | currency | failedRegMessage                                                                    |
            | test1@gmail.com | Abcde$23 | EUR      | This email has been used for registration already. Please contact customer support. |