import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import home from "./page_object_model/Home";
import registration from "./page_object_model/Registration";
import login from "./page_object_model/Login";

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

/*
    STEPS DEFINITION FOR USER REGISTRATION - FAILED SCENARIO
*/

Given("I click on Sing Up button", () => {
    registration.clickOnSignUpButton();
})

When("I type a registered email {string} and password {string}", (email, password) => {
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
    registration.selectCreateAccountButton();
})

Then("I get an error message: {string}", (failedRegMessage) => {
    registration.verifyErrorRegistrationMessage(failedRegMessage);
})

/*
    STEPS DEFINITION FOR LOGIN WITH A VALID USER SCENARIO
*/

Given("I click on Sign in button", () => {
    login.clickOnSignInDiv();
})

When("I select Log in with email", () => {
    login.clickOnSignInTag();
})

Then("I set a valid email {string} and password {string}", (email, password) => {
    login.typeValidEmail(email);
    login.typeValidPassword(password);
})

And("I Sign in", () => {
    login.clickOnSignInButton();
})

Then("I can see my profile information including my username: {string}", (username) => {
    login.clickOnProfileTab();
    login.verifyUserName(username);
    login.verifyUserId();
})

/*
    STEPS DEFINITION FOR LOGIN WITH AN INVALID USER SCENARIO
*/

Given("I click on Sign in button", () => {
    login.clickOnSignInDiv();
})

When("I select Log in with email", () => {
    login.clickOnSignInTag();
})

Then("I set an invalid email {string} and password {string}", (email, password) => {
    login.typeValidEmail(email);
    login.typeValidPassword(password);
})

And("I Sign in", () => {
    login.clickOnSignInButton();
})

Then("I get an error message: {string}", (failedLoginMessage) => {
    login.verifyErrorRegistrationMessage(failedLoginMessage);
})