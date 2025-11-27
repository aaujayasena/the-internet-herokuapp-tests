 //Importing Landing Page Object Model
import { LandingPage } from  '../../page-object/landing-page';
//Importing A/B Testing Page Object Model
import  {ABTestingPage} from '../../page-object/abtesting-page';
//Importing Page Content Constants
import { PageContent } from '../../constant/page-content';
//Importing Add and Remove Page Object Model
import { AddAndRemovePage} from '../../page-object/add-and-remove-page';

describe('Coding Assigmnet', () => {
    
    //Creating object of LandingPage and ABTestingPage classes
     const landingPage = new LandingPage();
     //Creating object of ABTestingPage class
     const abtestingPage = new ABTestingPage();


    beforeEach(() => {
        //Navigate to Landing Page before each test
        cy.navigateToLandingPage();
    });

    it('1.1.1 - Ensure user can  access the Landing Page', () => {

        //Validating Header1
        landingPage.getHeader1().should('be.visible').and('have.text', PageContent.LANDING_PAGE_HEADER1);   
        //Validating Header2
        landingPage.getHeader2().should('be.visible').and('have.text', PageContent.LANDING_PAGE_HEADER2);
    })

    it('1.1.2 - Ensure user can  access the A/B testing Page', () => {
        //Clicking on A/B Testing link
        landingPage.getlinkabtesting().should('be.visible').click();   
        //Validating A/B Testing Page Header
        abtestingPage.getHeader1().should('be.visible').and('contain.text', PageContent.AB_TESTING_PAGE_HEADER);
    })

    it('1.1.3 - Ensure user can perfome add and remove actions', () => {
       
        //Clicking on Add and Remove Elements link
        landingPage.getlinkaddandremove().should('be.visible').click({force:true}); 
        const addAndRemovePage = new AddAndRemovePage();
        //Validating Add and Remove Page Header
        addAndRemovePage.getheader1().should('be.visible').and('have.text',PageContent.ADD_AND_REMOVE_PAGE_HEADER); 
        // Delete button should not be visible initially
        addAndRemovePage.getDeleteButton().should('not.exist');
        //Clicking on 'Add Element' button
        addAndRemovePage.getAddElementButton().should('be.visible').click();
        //Validating 'Delete' button is displayed
        addAndRemovePage.getDeleteButton().should('be.visible').and('have.text', PageContent.DELETE);
        //Clicking on 'Delete' button
        addAndRemovePage.getDeleteButton().click();
        //Validating 'Delete' button is removed
        addAndRemovePage.getDeleteButton().should('not.exist');
    })

    //Clearing cookies after each test
    after(() => {
        //Clear cookies after each test
        cy.clearCookies();
    });
});
