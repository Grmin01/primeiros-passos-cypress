describe('Oragen HRM Tests', () => {

  //criando um objeto pra facilitar
  const selectortList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    selectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    credentialAlert: "[role='alert']"
  }

  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectortList.usernameField).type('Admin')
    cy.get(selectortList.passwordField).type ('admin123')
    cy.get(selectortList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectortList.selectionTitleTopBar).contains('Dashboard')
  })
  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectortList.usernameField).type('Test')
    cy.get(selectortList.passwordField).type('Test')
    cy.get(selectortList.loginButton).click()
    cy.get(selectortList.credentialAlert)    
  }) 
})