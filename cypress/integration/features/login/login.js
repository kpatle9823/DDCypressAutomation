import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

Given("Nevigate to the website", ()=>{
    cy.visit("https://dune-dev.tresata.com/web/home");
})

 When("User clicks on siginingin button",()=>{
     cy.xpath('//button[text()="Sign in"]').click();
 })

When("enter {String} and {String}",(username, password)=>{
    cy.get("#signInFormUsername").clear();
    cy.get("#signInFormUsername").type('${username}{enter}');
    cy.get("#signInFormPassword").clear();
    cy.get("#signInFormPassword").type('${password}{enter}');
    
})

And("User clicks on sign button",()=>{
cy.get('input[name="signInSubmitButton"]').click();
})

Then("Validate home page",()=>{
    cy.title().should('eq', 'Testing');
})
