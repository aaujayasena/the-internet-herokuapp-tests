/**
 * This class represents the AB Testing Page and contains methods to interact with its elements.
 */

// Selector for header1 element
const header1 = 'h3';

// Exporting the ABTestingPage class
export class ABTestingPage {

    /**
     * This method returns the header1 element.
     * @returns header1
     */
    getHeader1() {
        return cy.get(header1);
    }
}
