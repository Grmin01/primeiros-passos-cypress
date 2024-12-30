class LoginPage {
    selectortList() {
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton: "[type='submit']",
            credentialAlert: "[role='alert']"            
        }
        // retornar a contante para funcionar loginWithUser
        return selectors
    }
    accessLoginPage() {
        cy.visit('/auth/login')
    }

    loginWithUse(username, password) {
        cy.get(this.selectortList().usernameField).type(username)
        cy.get(this.selectortList().passwordField).type(password)        
        cy.get(this.selectortList().loginButton).click()        
    }

    checkAccessInvalid(){
        cy.get(this.selectortList().credentialAlert) 
    }
}

//tem que exporta se não n consegue usar em outras paginas
export default LoginPage