Feature: Book a stay

    As QA Automation I want to verify the process to book a stay on Booking.com page

    Scenario Outline: Book a stay on "<destination>" from "<checkInDate>" to "<checkOutDate>"
        Given I navigate to Booking.com home page
        And I choose "<destination>" as destination
        And I set the period of stay from "<checkInDate>" to "<checkOutDate>"
        When I look for <rooms> rooms for <adults> adults and <children> children
        And I select a stay with "<evaluation>" evaluation
        And I select the option I want to book
        Then I complete the details firts name:"<firstName>", last name:"<lastName>" and email:"<email>"
        And I check the details of the selected accommodation
        Examples:
            | firstName | lastName | destination | evaluation | checkInDate | checkOutDate | rooms | adults | children | email              |
            | Pedro     | Giron    | Las Vegas   | Exellent   | 18/04/2023  | 09/05/2023   | 1     | 3     | 0        | testmail@gmail.com |