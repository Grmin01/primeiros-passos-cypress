describe('orange HRM Tests', () => {
  it('Login - Success', () => {  // quando quiser pular uma aprte do codigo usar .skip
    cy.visit('https:/opensource-demo.orangehrmlive.com/web/index.php/auth/login') // abriando a pagina
    //Loguin usuario e senha
    cy.get("[name='username']").type('Admin') //Usuario
    cy.get("[name='password']").type('admin123')  // Senha
    cy.get("[type='submit']").click() //Clicar no botao de loguin

    //Verificar se esta na pagina correta
    //cy.location('pathname').should('equal', '/web/index.php/dashboard/index') //pelo site
    cy.get(".oxd-topbar-header-breadcrumb-module").contains('Dashboar') //confirma por palavras cotinda em algum titulo
  })
  it('Login - Fail', () => {
    cy.visit('https:/opensource-demo.orangehrmlive.com/web/index.php/auth/login') // abriando a pagina
    //Loguin usuario e senha
    cy.get("[name='username']").type('Test') //Usuario
    cy.get("[name='password']").type('Test')  // Senha
    cy.get("[type='submit']").click() //Clicar no botao de loguin
    cy.get("[role='alert']") //Alerta de erro
  })
})