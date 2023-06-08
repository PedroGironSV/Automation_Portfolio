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