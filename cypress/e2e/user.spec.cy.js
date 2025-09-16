import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js' // não esquecer de importar a pagina para dentro da pasta princiapl
import DashBoardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myinfo.js'

const loginPage = new LoginPage() // criar contante para cada pagina criada
const dashboard = new DashBoardPage()
const menupage = new MenuPage()
const myinfo = new MyInfoPage()

//informações randomicas
const Chance = require('chance');
const chance = new Chance();



describe('orange HRM Tests', () => {  
    it('User Infor Update - Success', () => {  // quando quiser pular uma aprte do codigo usar .skip
        //Loguin usuario e senha
        loginPage.accessLoginPage()
        loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password) //chama em parentes os dados dos usurio do aquivo jason

        //Verificar se esta na pagina correta
        dashboard.checkDashBoard()
        // cy.location('pathname').should('equal', '/web/index.php/dashboard/index') //pelo site

        //Menu Page My Info
        // menupage.acsessAdmin()
        // menupage.acsessPIM()
        // menupage.acsessLeave()
        // menupage.acsessTime()
        // menupage.acsessRecruitmente()
        menupage.acsessMyInfo()
        // menupage.acsessPerformace()
        // menupage.acsessDashboard()
        // menupage.acsesDirectory()
        //menupage.acsessMaintence()
        //menupage.acsessClaim()
        //menupage.acsessBuzz()

        myinfo.fillPersonalDetails(
          chance.first(),
          chance.name(),
          chance.last()

        )
        myinfo.fillEmployeedDetails(
          userData.myInfoField.employeeId,
          userData.myInfoField.otherId,
          userData.myInfoField.driversLicenseNumber,
          userData.myInfoField.licenseExpiryDate,
          userData.myInfoField.nationality,
          userData.myInfoField.maritalStatus

        )

        myinfo.fillEstatus(userData.myInfoField.nationality, userData.myInfoField.maritalStatus)
        myinfo.saveForm()        
      }
    )        
  }
)