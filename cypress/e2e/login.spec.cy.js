import userData from '../fixtures/userData.json'

describe('orange HRM Tests', () => {
  //criando um objeto
  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loguinButton: "[type='submit']",
    selectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredencialAlert: "[role='alert']"
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

  it('Login - Success', () => {  // quando quiser pular uma aprte do codigo usar .skip
    cy.visit('/auth/login') // abriando a pagina
    //Loguin usuario e senha
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username) //Usuario
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)  // Senha
    cy.get(selectorsList.loguinButton).click() //Clicar no botao de loguin

    //Verificar se esta na pagina correta
    //cy.location('pathname').should('equal', '/web/index.php/dashboard/index') //pelo site
    //cy.get(selectorsList.selectionTitleTopBar).contains('Dashboar') //confirma por palavras cotinda em algum titulo
    cy.get(selectorsList.dashboardGrid)  // verificando so com elemento existente
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