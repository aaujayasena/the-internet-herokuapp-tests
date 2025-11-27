/**
 * Add and Remove Page Object Model`
 * This class contains locators and methods for interacting with the Add and Remove Elements page.
 */

const header1 = 'h3',
addElementButton = 'button[onclick="addElement()"]',
deleteButton = 'button[onclick="deleteElement()"]';

export class AddAndRemovePage {

    /**
     * This method returns the header1 element.
     * @returns header1
     */
    getheader1() {
        return cy.get(header1);
    }
    /**
     * This method returns the delete element.
     * @returns 'Delete Element' button
     */
    getDeleteButton() {
        return cy.get(deleteButton);
    }   

    /**
     * This method returns the 'Add Element' button element.
     * @returns 'Add Element' button
     */
    getAddElementButton() {
        return cy.get(addElementButton);
    }
}