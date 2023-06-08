class HomeActions {

    homeElements = {
        visitDemoCasino: () => cy.visit('https://demo.casino/', { failOnStatusCode: false }),
        welcomeCard: () => cy.get('.mfp-content'),
        closeWelcomeCardButton: () => cy.get('button').contains('Got it').should('be.visible').click(),
        signUpButton: () => cy.get('a').contains('Sign up')
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