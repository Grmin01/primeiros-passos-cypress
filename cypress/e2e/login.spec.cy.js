describe('orange HRM Tests', () => {
  //criando um objeto
  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loguinButton: "[type='submit']",
    selectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    wrongCredencialAlert: "[role='alert']"
  } 

  it('Login - Success', () => {  // quando quiser pular uma aprte do codigo usar .skip
    cy.visit('https:/opensource-demo.orangehrmlive.com/web/index.php/auth/login') // abriando a pagina
    //Loguin usuario e senha
    cy.get(selectorsList.usernameField).type('Admin') //Usuario
    cy.get(selectorsList.passwordField).type('admin123')  // Senha
    cy.get(selectorsList.loguinButton).click() //Clicar no botao de loguin

    //Verificar se esta na pagina correta
    //cy.location('pathname').should('equal', '/web/index.php/dashboard/index') //pelo site
    cy.get(selectorsList.selectionTitleTopBar).contains('Dashboar') //confirma por palavras cotinda em algum titulo
  })
  it('Login - Fail', () => {
    cy.visit('https:/opensource-demo.orangehrmlive.com/web/index.php/auth/login') // abriando a pagina
    //Loguin usuario e senha
    cy.get(selectorsList.usernameField).type('Test') //Usuario
    cy.get(selectorsList.passwordField).type('Test')  // Senha
    cy.get(selectorsList.loguinButton).click() //Clicar no botao de loguin
    cy.get(selectorsList.wrongCredencialAlert) //Alerta de erro
  })
})