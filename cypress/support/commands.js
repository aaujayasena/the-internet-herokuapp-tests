/** 
 * Custom command to navigate to the Landing Page
 */

/**
 * Navigates to the Landing Page using the URL from environment variables.
 */
Cypress.Commands.add('navigateToLandingPage', () => {
    cy.visit(Cypress.env('acessUrl'));
});
