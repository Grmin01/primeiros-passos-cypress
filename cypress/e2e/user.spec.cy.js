import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

//atribuir a uma constante a pagina criada para login
const loginPage = new LoginPage()
const dashboard = new DashboardPage()
const menuPage = new MenuPage()
const myinfoPage = new MyInfoPage()

describe('Oragen HRM Tests', () => {
  it.only('Use Info Update - Success', () => {    
    loginPage.accessLoginPage()
    loginPage.loginWithUse(userData.userSuccess.username, userData.userSuccess.password)
    dashboard.checkDashboardPage()
    menuPage.accessMyInfo()
    myinfoPage.dataMyInfo()    
  })

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.credentialAlert)    
  }) 
})