 //Importing Landing Page Object Model
import { LandingPage } from  '../../page-object/landing-page';
//Importing A/B Testing Page Object Model
import  {ABTestingPage} from '../../page-object/abtesting-page';
//Importing Page Content Constants
import { PageContent } from '../../constant/page-content';


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

    //Clearing cookies after each test
    after(() => {
        //Clear cookies after each test
        cy.clearCookies();
    });
});
