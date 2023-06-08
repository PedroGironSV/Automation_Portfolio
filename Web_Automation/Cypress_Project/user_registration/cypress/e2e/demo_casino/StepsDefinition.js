import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import home from "./page_object_model/Home";
import registration from "./page_object_model/Registration";

home.handleUncaughtExceptions();

/*
    STEPS DEFINITION FOR BACKGROUND
*/
Given("I navigate to demo.casino web site", () => {
    home.navigateToDemoCasino();
})

When("I can see the Welcome message", () => {
    home.waitForWelcomeCard();
})

Then("I close the Welcome message card", () => {
    home.closeWelcomeCard();
})

/*
    STEPS DEFINITION FOR USER REGISTRATION - SUCCESSFUL SCENARIO
*/

Given("I click on Sing Up button", () => {
    registration.clickOnSignUpButton();
})

When("I type my email {string} and password {string}", (email, password) => {
    registration.typeEmail(email);
    registration.typePassword(password);
    registration.confirmPassword(password);
})

And("I select my rather currency {string}", (currency) => {
    registration.clickOnCurrencyDropDown();
    registration.selectRatherCurrency(currency);
})

Then("I complete the registration form", () => {
    registration.acceptTermsAndConditions();
})

And("I select the Create Account button", () => {
    registration.clickOnCreateAccountButton();
})

Then("I can see a successful registration message: {string}", (successRegMessage) => {
    registration.verifySuccessfulRegistrationMessage(successRegMessage);
})