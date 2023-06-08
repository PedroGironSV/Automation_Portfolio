class RegistrationActions {

    registrationElements = {
        signUpButton: () => cy.get('a').contains('Sign up').should('be.visible').click(),
        emailInput: (email) => cy.get('#core__protected_modules_user_yiiForm_RegistrationForm_email').should('be.enabled').scrollIntoView().type(email),
        passwordInput: (password) => cy.get('#core__protected_modules_user_yiiForm_RegistrationForm_password').type(password),
        confirmPasswordInput: (password) => cy.get('#core__protected_modules_user_yiiForm_RegistrationForm_password_confirmation').type(password),
        currencyDropDown: () => cy.get('span').contains('USD').click(),
        selectCurrency: (currency) => cy.get('.selectric-items div.selectric-scroll').eq(1).contains(currency).click(),
        termsAndConditions: () => cy.get('label').contains('I unconditionally agree with').should('be.visible').click(),
        verifyRegistrationButton: () => cy.get('button').contains('Create account').scrollIntoView().should('be.visible'),
        createAccountButton: () => cy.get('button').contains('Create account').scrollIntoView().should('be.visible').click(),
        successfulRegistrationMessage: (successRegMessage) => cy.get('p').contains('Registration successfully finished').should('have.text', successRegMessage)
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
}

module.exports = new RegistrationActions();