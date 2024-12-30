import userData from '../fixtures/user-data.json'
import DashboardPage from '../pages/dashboardPage.js'
import LoginPage from '../pages/loginPage.js'


//atribuir a uma constante a pagina criada para login
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe('Login Oragen HRM Tests', () => {

  it('Login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUse(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessInvalid()

  }) 

  it('Login - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUse(userData.userSuccess.username, userData.userSuccess.password) 
    dashboardPage.checkDashboardPage()   
  }) 
})