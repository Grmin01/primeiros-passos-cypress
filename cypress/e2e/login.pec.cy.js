import userData from '../fixtures/user-data.json'

describe('Oragen HRM Tests', () => {

  //criando um objeto pra facilitar
  const selectortList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    selectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    credentialAlert: "[role='alert']"
  }


  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectortList.usernameField).type(userData.userSuccess.username)
    cy.get(selectortList.passwordField).type (userData.userSuccess.password)
    cy.get(selectortList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectortList.dashboardGrid)
  })

  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectortList.usernameField).type(userData.userFail.username)
    cy.get(selectortList.passwordField).type(userData.userFail.password)
    cy.get(selectortList.loginButton).click()
    cy.get(selectortList.credentialAlert)    
  }) 
})