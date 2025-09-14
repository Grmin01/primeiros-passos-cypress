import userData from '../fixtures/userData.json'

describe('orange HRM Tests', () => {
  //criando um objeto
  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loguinButton: "[type='submit']",
    selectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredencialAlert: "[role='alert']",
    myInfoButtom: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: "[name='firstName']",
    middleNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    employeeIdField: ".oxd-input",
    otherIdField: ".oxd-input",
    driversLicenseNumberField: ".oxd-input",
    licenseExpiryDateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']",
    
  } 
   
  //Usando dados de testes em objetos
  //const userDate = {
    //userSuccess: {
      //username: 'Admin',
      //password: 'admin123'
    //},
    //userFail: {
     // username: 'Teste',
      //password: 'Teste'
   // }
  //}

  it.only('User Infor Update - Success', () => {  // quando quiser pular uma aprte do codigo usar .skip
    cy.visit('/auth/login') // abriando a pagina
    //Loguin usuario e senha
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username) //Usuario
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)  // Senha
    cy.get(selectorsList.loguinButton).click() //Clicar no botao de loguin
    
    //Verificar se esta na pagina correta
    //cy.location('pathname').should('equal', '/web/index.php/dashboard/index') //pelo site
    //cy.get(selectorsList.selectionTitleTopBar).contains('Dashboar') //confirma por palavras cotinda em algum titulo
    cy.get(selectorsList.dashboardGrid)  // verificando so com elemento existente
    cy.get(selectorsList.myInfoButtom).click()
    cy.get(selectorsList.firstNameField).clear().type(userData.myInfoField.firstName)
    cy.get(selectorsList.middleNameField).clear().type(userData.myInfoField.middleName)
    cy.get(selectorsList.lastNameField).clear().type(userData.myInfoField.lastname)  
    cy.get(selectorsList.employeeIdField).eq(4).clear().type(userData.myInfoField.employeeId) 
    cy.get(selectorsList.otherIdField).eq(5).clear().type(userData.myInfoField.otherId)
    cy.get(selectorsList.driversLicenseNumberField).eq(6).clear().type(userData.myInfoField.driversLicenseNumber)    
    cy.get(selectorsList.licenseExpiryDateField).eq(0).clear().type(userData.myInfoField.licenseExpiryDate)
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')

  })


  it('Login - Fail', () => {
    cy.visit('/auth/login') // abriando a pagina
    //Loguin usuario e senha
    cy.get(selectorsList.usernameField).type(userData.userFail.username) //Usuario
    cy.get(selectorsList.passwordField).type(userData.userFail.password)  // Senha
    cy.get(selectorsList.loguinButton).click() //Clicar no botao de loguin
    cy.get(selectorsList.wrongCredencialAlert) //Alerta de erro
  })
})