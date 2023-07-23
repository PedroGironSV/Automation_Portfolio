import login from "../web_elements/LoginElements";
import validate from "../web_elements/Validations";

class LoginActions {

    loginElements = {
        signInDiv: () => cy.get(login.signInDiv).contains(login.signInText).click(),
        signInTag: () => cy.get(login.signInTag).contains(login.signInText).click(),
        loginForm: () => cy.get(login.loginFormId).scrollIntoView(),
        userEmail: (email) => cy.get(login.userEmailId).type(email),
        userPassword: (password) => cy.get(login.userPasswordId).type(password),
        signInButton: () => cy.get(login.signInButton).contains(login.signInText).click(),
        errorMessage: (failedLoginMessage) => cy.get(login.errorMessageId).scrollIntoView().should(validate.HAVE_TEXT, failedLoginMessage),
        profileTab: () => cy.get(login.signInTag).contains(login.profile).click(),
        username: (username) => cy.get(login.profileClass).eq(1).scrollIntoView().should(validate.HAVE_TEXT, username),
        userId: () => cy.get(login.signInDiv).contains(login.casinoId).scrollIntoView().should(validate.BE_VISIBLE)
    }

    clickOnSignInDiv(){
        this.loginElements.signInDiv();
    }

    clickOnSignInTag(){
        this.loginElements.signInTag();
    }

    typeValidEmail(email){
        this.loginElements.loginForm();
        this.loginElements.userEmail(email);
    }

    typeValidPassword(password){
        this.loginElements.userPassword(password);
    }

    clickOnSignInButton(){
        this.loginElements.signInButton();
    }

    verifyLoginErrorMessage(failedLoginMessage){
        this.loginElements.errorMessage(failedLoginMessage);
    }

    clickOnProfileTab(){
        this.loginElements.profileTab();
    }

    verifyUserName(username){
        this.loginElements.username(username);
    }

    verifyUserId(){
        this.loginElements.userId();
    }
}

module.exports = new LoginActions();