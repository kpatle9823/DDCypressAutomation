import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

Given("Nevigate to the website", ()=>{
    cy.visit("https://dune-qa.tresata.com/web/home");
})

 When("User clicks on siginingin button",()=>{
    cy.wait(10000);
     cy.xpath('//button[text()="Sign in"]').click();
 })

When("enter {string} and {string}", (username, password)=>{
    //browser.sleep(10000);
    //setDefaultTimeout(60 * 1000);
    cy.wait(20000)
    cy.visit("https://koert-test.auth.us-east-1.amazoncognito.com/login?client_id=5v66g6oke90enbmojg6fsg2999&redirect_uri=https%3A%2F%2Fdune-qa.tresata.com%2Fweb%2Fhome&response_type=code&scope=openid&state=b9aacd28d3c1461a8d9bea57dd612c56&code_challenge=BWm1j0DljcFsdNny_9GLwopiaeqQYf469c47sLplR-M&code_challenge_method=S256&response_mode=query");
    cy.get("#signInFormUsername").clear();
    cy.get("#signInFormUsername").type('${username}{enter}');
    cy.get("#signInFormPassword").clear();
    cy.get("#signInFormPassword").type('${password}{enter}');
    
})

And("User clicks on sign button",()=>{
    cy.wait(20000)
cy.get('input[name="signInSubmitButton"]').click();
})

Then("Validate home page",()=>{
    cy.title().should('eq', 'Testing');
})
