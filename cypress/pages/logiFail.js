class LoginFail {
    selectortList() {    
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton: "[type='submit']",
            credentialAlert: "[role='alert']",
        }
        return selectors
      }     
      
      checkLogindPageFaill(username, password) {
        cy.get(this.selectortList().usernameField).type(username)
        cy.get(this.selectortList().passwordField).type(password)
        cy.get(this.selectortList().loginButton).click()
        cy.get(this.selectortList().credentialAlert) 
            
      }      
}

export default LoginFail