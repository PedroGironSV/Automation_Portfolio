Feature: Book a stay

    As QA Automation I want to verify the process to book a stay on Booking.com page

    Scenario Outline: Book a stay on "<destination>" from "<checkInDate>" to "<checkOutDate>"
        Given I navigate to Booking.com home page
        And I choose "<destination>" as destination
        And I set the period of stay from "<checkInDate>" to "<checkOutDate>"
        When I look for <rooms> rooms and <adults> adults
        And I scroll to a stay with "<evaluation>" evaluation
        And I select the option I want to book with "<evaluation>" evaluation
        Then I complete the details firts name:"<firstName>", last name:"<lastName>" and email:"<email>"
        And I check the details of the selected accommodation
        Examples:
            | firstName | lastName | destination | evaluation | checkInDate | checkOutDate | rooms | adults | email              |
            | Pedro     | Giron    | Las Vegas   | Good       | 15/05/2023  | 05/06/2023   | 3     | 6      | testmail@gmail.com |