import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

const Chance = require('chance')

//atribuir a uma constante a pagina criada para login
const loginPage = new LoginPage()
const dashboard = new DashboardPage()
const menuPage = new MenuPage()
const myinfoPage = new MyInfoPage()
const chance = new Chance()


describe('Oragen HRM Tests', () => {

  it('Use Info Update - Success', () => {    
    loginPage.accessLoginPage()
    loginPage.loginWithUse(userData.userSuccess.username, userData.userSuccess.password)

    dashboard.checkDashboardPage()

    menuPage.accessMyInfo()

    myinfoPage.fillPersonalDetails(chance.first(), chance.last(), chance.string())
    myinfoPage.fillEmployeedDetails("employeeId", "otherId","driversLicenseNumber", "2025-05-03")
    myinfoPage.fillStatus("Greek", "Married")
    myinfoPage.saveForm()
 })

})