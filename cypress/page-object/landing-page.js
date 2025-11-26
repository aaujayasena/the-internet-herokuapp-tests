/**
 * Landing Page Object Model
 * This class contains locators and methods for interacting with the landing page.
 */

//Page locators
const header1 = 'h1',
header2 = 'h2',
linkABtesting = 'a[href="/abtest"]',
linkBasicAuth = 'a[href="/basic_auth"]';

/**
 * Landing Page Object Model
 * This class contains locators and methods for interacting with the landing page.
 */
export class LandingPage {

    /**
     * This method returns the header1 element.
     * @returns header1
     */
    getHeader1() {
        return cy.get(header1);
    }   

    /**
     * This method returns the header2 element.
     * @returns header2
     */
    getHeader2() {
     return cy.get(header2);
    }

    /**
     * This method returns the linkABtesting element.
     * @returns linkABtesting element
     */
    getlinkabtesting() {
     return cy.get(linkABtesting);
    }

    /**
     * This method returns the linkBasicAuth element.
     * @returns linkBasicAuth element
     */
    getlinkbasicauth() {
     return cy.get(linkBasicAuth);
    }
}