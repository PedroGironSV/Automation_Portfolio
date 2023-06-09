import home from "../web_elements/HomeElements";
import validate from "../web_elements/Validations";

class HomeActions {

    homeElements = {
        visitDemoCasino: () => cy.visit('https://demo.casino/', { failOnStatusCode: false }),
        welcomeCard: () => cy.get(home.welcomeCardClass),
        closeWelcomeCardButton: () => cy.get(home.closeCardButton).contains(home.closeCardText).should(validate.BE_VISIBLE).click()
    }

    handleUncaughtExceptions() {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
    }

    navigateToDemoCasino() {
        this.homeElements.visitDemoCasino();
    }

    waitForWelcomeCard() {
        this.homeElements.welcomeCard();
    }

    closeWelcomeCard() {
        this.homeElements.closeWelcomeCardButton();
    }
}

module.exports = new HomeActions();