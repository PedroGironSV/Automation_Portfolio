import registration from "../web_elements/RegistrationElements";
import validate from "../web_elements/Validations";

class RegistrationActions {

    registrationElements = {
        signUpButton: () => cy.get(registration.anchorTag).contains(registration.signUpText).should(validate.BE_VISIBLE).click(),
        emailInput: (email) => cy.get(registration.emailId).should(validate.BE_ENABLED).scrollIntoView().type(email),
        passwordInput: (password) => cy.get(registration.passwordId).type(password),
        confirmPasswordInput: (password) => cy.get(registration.confirmPasswordId).type(password),
        currencyDropDown: () => cy.get(registration.spanTag).contains(registration.usdText).click(),
        selectCurrency: (currency) => cy.get(registration.currencyDropDownClass).eq(1).contains(currency).click(),
        termsAndConditions: () => cy.get(registration.labelTag).contains(registration.termnsAndConditionsText).should(validate.BE_VISIBLE).click(),
        verifyRegistrationButton: () => cy.get(registration.buttonTag).contains(registration.createAccountText).scrollIntoView().should(validate.BE_VISIBLE),
        createAccountButton: () => cy.get(registration.buttonTag).contains(registration.createAccountText).click(),
        successfulRegistrationMessage: (successRegMessage) => cy.get(registration.pTag).contains(registration.successRegistrationMessage).should(validate.HAVE_TEXT, successRegMessage),
        scrollToAlertMessage: () => cy.get(registration.labelTag).contains(registration.emailText).scrollIntoView(),
        errorRegistrationMessage: (failedRegMessage) => cy.get(registration.errorRegistrationId).contains(failedRegMessage).should(validate.BE_VISIBLE)
    }

    clickOnSignUpButton(){
        this.registrationElements.signUpButton();
    }

    typeEmail(email){
        this.registrationElements.emailInput(email);
    }

    typePassword(password){
        this.registrationElements.passwordInput(password);
    }

    confirmPassword(password){
        this.registrationElements.confirmPasswordInput(password);
    }

    clickOnCurrencyDropDown(){
        this.registrationElements.currencyDropDown();
    }

    selectRatherCurrency(currency){
        this.registrationElements.selectCurrency(currency);
    }

    acceptTermsAndConditions(){
        this.registrationElements.termsAndConditions();
    }

    clickOnCreateAccountButton(){
        this.registrationElements.verifyRegistrationButton();
        this.registrationElements.createAccountButton();
    }

    verifySuccessfulRegistrationMessage(successRegMessage){
        this.registrationElements.successfulRegistrationMessage(successRegMessage);
    }

    verifyErrorRegistrationMessage(failedRegMessage){
        this.registrationElements.scrollToAlertMessage();
        this.registrationElements.errorRegistrationMessage(failedRegMessage);
    }
}

module.exports = new RegistrationActions();