import login from '../selectors/login.sel'
import testData from '../test-data/data copy.json'
import xpath from 'cypress-xpath'

testData.forEach(test => {
    describe('portfolio screen loaded', () => {
        context('successfully', () => {
            before(() => {
                cy.visit('https://db.admin.gridedge.dev/mlwfhoijanjfa')
                cy.get('.mat-form-field.ng-tns-c52-2 > .mat-form-field-wrapper > .mat-form-field-flex').type('basic.test.user@gridedge.co.uk')
                cy.get('.paddingBetweenInputs > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('0&Mq9#i*$$Rt')
                cy.get('.mat-checkbox-inner-container').click()
                cy.get('#signInButton').click()
                cy.get(':nth-child(1) > .mat-card > .mat-card-content').should('be.visible')

            })
            // after(() =>{
            //     //signout
            //     cy.get('.primaryBackGroundColor > .mat-focus-indicator > .mat-button-wrapper > .material-icons').click()
            //     cy.get('.mat-drawer-inner-container > .cursorPointer').click()
            // })
            it('User should be able to open added site ', () => {

                cy.get('.align-items-end > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(test.Display_name).clear()
                cy.get('.align-items-end > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(test.Display_name)
                //fiscal meter tab

                cy.xpath('//mat-card[contains(@class,"mat-card")]//mat-card-content[contains(@class,"mat-card-content")]//mat-icon').then(($ele) => {
                    if ($ele.length == 2) {
                        cy.get(':nth-child(1) > .mat-card > .mat-card-content').click()
                        cy.get(login.shortSiteName).type(test.Short_name)

                        cy.get(login.siteName).type(test.Display_name)
                        // cy.get(login.latitude).type(test.Latitude)
                        // cy.get(login.longitude).type(test.Longitude)
                        // cy.get(login.address).type(test.Address)
                        cy.get(login.postCode).type(test.Post_Code)
                        //   cy.get(login.timeZone).click()
                        //   cy.get(login.selectTimezone).click()
                        cy.get(login.addButton).click()
                        //cy.get(login.cancelButton).click()


                        cy.get('.align-items-end > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(test.Display_name).clear()
                        cy.get('.align-items-end > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(test.Display_name)



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
                            //cy.get('.mat-simple-snack-bar-content').contains('API Error 409: Failed to add the fiscal meter')
                            //cy.get('.mx-2 > .mat-focus-indicator').click()

                        }

                        //go back

                        cy.get('app-back-arrow > .mat-icon').click()

                    }
                    else {
                        cy.get('.adminCardTitle').click()
                        cy.get('[mattooltip="View and Edit Meters"]').click()
    
                    }

                })
            })
        })
    })
})
