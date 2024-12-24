import userData from '../fixtures/user-data.json'

describe('Oragen HRM Tests', () => {

  //criando um objeto pra facilitar
  const selectortList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    selectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    credentialAlert: "[role='alert']",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: '.oxd-input',
    dateField: "[placeholder='yyyy-mm-dd']",
    dateCloseButton: ".--close",
    SubmitButton: "[type='submit']"
  }


  it.only('Use Info Update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectortList.usernameField).type(userData.userSuccess.username)
    cy.get(selectortList.passwordField).type (userData.userSuccess.password)
    cy.get(selectortList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectortList.dashboardGrid)
    cy.get(selectortList.myInfoButton).click(),
    cy.get(selectortList.firstNameField).clear().type('FirstNameTest'),
    cy.get(selectortList.lastNameField).clear().type('LastName'),
    cy.get(selectortList.genericField).eq(4).clear().type('NickNametest'),
    cy.get(selectortList.genericField).eq(5).clear().type('EmployeeId'),
    cy.get(selectortList.genericField).eq(6).clear().type('OtherId'),
    cy.get(selectortList.genericField).eq(7).clear().type('Drivers License Number'),
    cy.get(selectortList.genericField).eq(9).clear().type('SSNNumber'),
    cy.get(selectortList.genericField).eq(8).clear().type('2025-03-10'),
    cy.get(selectortList.dateCloseButton).click(),
    cy.get(selectortList.genericField).eq(10).clear().type('SINNumber'),
    cy.get(selectortList.SubmitButton).eq(0).click(),
    cy.get('body').should('contain', 'Successfully Updated'),
    cy.get('.oxd-toast-close')

  })

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectortList.usernameField).type(userData.userFail.username)
    cy.get(selectortList.passwordField).type(userData.userFail.password)
    cy.get(selectortList.loginButton).click()
    cy.get(selectortList.credentialAlert)    
  }) 
})