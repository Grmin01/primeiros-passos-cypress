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

      dataMyInfo() {
        cy.get(this.selectortList().firstNameField).clear().type('FirstNameTest')
        cy.get(this.selectortList().lastNameField).clear().type('LastName')               
            //cy.get(this.selectortList().genericField).eq(4).clear().type('NickNametest')
        cy.get(this.selectortList().genericField).eq(4).clear().type('EmployeeId')
        cy.get(this.selectortList().genericField).eq(5).clear().type('OtherId')
        cy.get(this.selectortList().genericField).eq(6).clear().type('Drivers License Number')
        cy.get(this.selectortList().genericField).eq(7).clear().type('2025-03-10')
        cy.get(this.selectortList().dateCloseButton).click(),
            //cy.get(this.selectortList().genericField).eq(10).clear().type('SSNNumber')  
            //cy.get(this.selectortList().genericField).eq(10).clear().type('SINNumber')
        cy.get(this.selectortList().SubmitButton).eq(0).click()
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
        cy.get(this.selectortList().genericComboBox).eq(0).click()
        cy.get(this.selectortList().secondItemComboBox).contains('Kuwaiti').click()
        cy.get(this.selectortList().genericComboBox).eq(1).click()
        cy.get(this.selectortList().secondItemComboBox).contains('Single').click()
            
      }      
}

export default MyInfoPage