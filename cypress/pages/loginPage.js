//Criando uma pagina para limpar a pasta principal e organizar por setores do site
//criando uma classe
class LoginPage {
    //criando em forma de função
    selectorsList() {
        const selectors = {
                usernameField: "[name='username']",
                passwordField: "[name='password']",
                loguinButton: "[type='submit']",
                wrongCredencialAlert: "[role='alert']" 
        }

        return selectors //sempre colocar return pra voltar na função
    }

    //criando em forma de função para acessar ao site
    accessLoginPage() {
            cy.visit('/auth/login') // abriando a pagina
    }
    
    //criando em forma de função para loguin no site, as informações do susuario aiunda fica no arquivo jason
    loginWithUser(username, password) {
            cy.get(this.selectorsList().usernameField).type(username) //Usuario, o "THIS" e pq as classes estão no selector
            cy.get(this.selectorsList().passwordField).type(password)  // Senha
            cy.get(this.selectorsList().loguinButton).click() //Clicar no botao de loguin  

    }

    checkWrongCredencial() {
            cy.get(this.selectorsList().wrongCredencialAlert)
    }
}

//sempre exportar a pagina
export default LoginPage