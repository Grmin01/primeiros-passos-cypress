class MyInfoPage {
    selectortList() {    
        const selectors = {            
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField: '.oxd-input',
            dateField: "[placeholder='yyyy-mm-dd']",
            dateCloseButton: ".--close",
            SubmitButton: "[type='submit']",
            genericComboBox: ".oxd-select-text-input",
            secondItemComboBox: '.oxd-select-option',
        }
        return selectors
      }

      fillPersonalDetails(firstName,lastName, nickNametest) {
        cy.get(this.selectortList().firstNameField).clear().type(firstName)
        cy.get(this.selectortList().lastNameField).clear().type(lastName)               
            //cy.get(this.selectortList().genericField).eq(4).clear().type(nickNametest)                 
      }     

      fillEmployeedDetails (employeeId, otherId,driversLicenseNumber, expiryDate, ssnnNumber, sinNumber) {
        cy.get(this.selectortList().genericField).eq(4).clear().type(employeeId)
        cy.get(this.selectortList().genericField).eq(5).clear().type(otherId)
        cy.get(this.selectortList().genericField).eq(6).clear().type(driversLicenseNumber)
        cy.get(this.selectortList().genericField).eq(7).clear().type(expiryDate)
        cy.get(this.selectortList().dateCloseButton).click()
            //cy.get(this.selectortList().genericField).eq(10).clear().type(ssnnNumber)  
            //cy.get(this.selectortList().genericField).eq(10).clear().type(sinNumber)        
      }

      saveForm() {        
        cy.get(this.selectortList().SubmitButton).eq(0).click({force: true})        
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
      }

      fillStatus(country, maritalStatus) {
        cy.get(this.selectortList().genericComboBox).eq(0).click()
        cy.get(this.selectortList().secondItemComboBox).contains(country).click()
        cy.get(this.selectortList().genericComboBox).eq(1).click()
        cy.get(this.selectortList().secondItemComboBox).contains(maritalStatus).click()
      }
}

export default MyInfoPage