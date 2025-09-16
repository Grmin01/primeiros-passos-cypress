import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js' // não esquecer de importar a pagina para dentro da pasta princiapl
import DashBoardPage from '../pages/dashboardPage.js'

const loginPage = new LoginPage() // criar contante para cada pagina criada
const dashboard = new DashBoardPage()


describe('Loguin Orange HRM Tests', () => {      
    it('Login - Fail', () => {
        cy.visit('/auth/login') // abriando a pagina
        //Loguin usuario e senha
        loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)    
        loginPage.checkWrongCredencial()                    
        })

    it('Login - Sucess', () => {
      cy.visit('/auth/login') // abriando a pagina
      //Loguin usuario e senha
      loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)           
      dashboard.checkDashBoard()           
      })
  }
)