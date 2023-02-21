import login from '../selectors/login.sel'
import testData from '../test-data/data copy.json'
import xpath from 'cypress-xpath'

testData.forEach(test => {
    describe('portfolio screen loaded', () => {
        context('successfully', () => {
            before(() => {
                cy.visit('https://db.admin.gridedge.dev/site_selector');
            })

            it('User should be able to open added site ', () => {

                cy.get('.align-items-end > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(test['Display Name'])
           
            //check that the site is already exist
            //cy.get('.col-4 > .mat-card > .mat-card-content > div').should('have.text', 'No Matching Sites')
         

           cy.get('.adminCardTitle')
    .if('not.visible')
    .click()                         // IF path
    .else()
    .log('The user already agreed')
            cy.get(':nth-child(1) > .mat-card > .mat-card-content').click();
            // cy.get(login.shortSiteName).type(test.shortSiteName)
 
             cy.get(login.siteName).type(test['Display Name'])
             // cy.get(login.latitude).type(test.Latitude)
             // cy.get(login.longitude).type(test.Longitude)
             // cy.get(login.address).type(test.Address)
            cy.get(login.postCode).type(test.postcode)
         //   cy.get(login.timeZone).click()
         //   cy.get(login.selectTimezone).click()
             //cy.get(login.addButton).click() 
             cy.get(login.cancelButton).click()
          
          
            cy.get('.align-items-end > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type("Grand Central (Test)").clear()
            cy.get('.align-items-end > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type("Grand Central (Test)")
       


                // cy.get('.align-items-end > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type("Grand Central (Test)").clear()
                // cy.get('.align-items-end > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type("Grand Central (Test)")
                //fiscal meter tab
                cy.get('.ng-star-inserted > .mat-card').click()
                cy.get('[mattooltip="View and Edit Meters"]').click()
                for (var index in test.MPAN) {

                    cy.get('.mat-card').click()

                    //cy.get('.mat-form-field-type-mat-select > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click({ multiple: true })

                    cy.get('.mat-form-field-type-mat-select > .mat-form-field-wrapper > .mat-form-field-flex').click()

                    cy.xpath('//div[@role="listbox"]//span[@class="mat-option-text"][contains(text()," Electralink ")]').click()
                    cy.xpath('//div[@class="verticalFlex justify-content-center"]//mat-form-field[2]//input').type(test.MPAN[index].value)
                    cy.xpath('//div[@class="verticalFlex justify-content-center"]//mat-form-field[3]//input').type("display name")

                    //add
                    cy.get('.verticalFlex.ng-touched > .d-flex > :nth-child(3) > .mat-focus-indicator').click()
                    cy.get('.mat-simple-snackbar-action > .mat-focus-indicator').click()
                    //cy.get('.mx-2 > .mat-focus-indicator').click()

                }

                //go back

                cy.get('app-back-arrow > .mat-icon').click()
            })
        })

    })


})

