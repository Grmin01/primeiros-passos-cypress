class MyInfoPage{
    selectorsList() {
        const selectors= {
            firstNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            employeeIdField: ".oxd-input",
            otherIdField: ".oxd-input",
            driversLicenseNumberField: ".oxd-input",
            licenseExpiryDateField: "[placeholder='yyyy-dd-mm']",
            dateCloseButton: ".--close",
            submitButton: "[type='submit']",
            nationalityButton: ".oxd-select-text--arrow",
            nationalityField: ".oxd-select-dropdown",
            maritalStatusButton: ".oxd-select-text--arrow",
            maritalStatusField: ".oxd-select-dropdown"

        }
     return selectors
    }

    fillPersonalDetails (firstName, middleName, lastname) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastname)

    }    
    fillEmployeedDetails (employeeId, otherId, driversLicenseNumber, licenseExpiryDate) { 
        cy.get(this.selectorsList().employeeIdField).eq(4).clear().type(employeeId) 
        cy.get(this.selectorsList().otherIdField).eq(5).clear().type(otherId)
        cy.get(this.selectorsList().driversLicenseNumberField).eq(6).clear().type(driversLicenseNumber)    
        cy.get(this.selectorsList().licenseExpiryDateField).eq(0).clear().type(licenseExpiryDate)
        cy.get(this.selectorsList().dateCloseButton).click()
    } 

    saveForm () {
        cy.get(this.selectorsList().submitButton).eq(0).click()
        cy.get('body').should('contain', 'Successfully Updated')
    } 

    fillEstatus (nationality, maritalStatus) {        
        cy.get(this.selectorsList().nationalityButton).eq(0).click()
        cy.get(this.selectorsList().nationalityField).contains(nationality).click()
        cy.get(this.selectorsList().maritalStatusButton).eq(1).click()
        cy.get(this.selectorsList().maritalStatusField).contains(maritalStatus).click()
    }

}

export default MyInfoPage