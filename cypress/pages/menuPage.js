class MenuPage {
    selectortList() {    
        const selectors = {            
            adminButton: "[href='/web/index.php/admin/viewAdminModule']",
            pimButton: "[href='/web/index.php/pim/viewPimModule']",
            leaveButton: "[href='/web/index.php/leave/viewLeaveModule']",
            timeButton: "[href='/web/index.php/time/viewTimeModule']",
            recruitmenteButton: "[href='/web/index.php/recruitment/viewRecruitmentModule']",
            myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]', 
            performaceButton: "[href='/web/index.php/performance/viewPerformanceModule']",
            directoryButton: "[href='/web/index.php/directory/viewDirectory']",
            maintenaceButton: "[href='/web/index.php/maintenance/viewMaintenanceModule']",
            claimButton: "[href='/web/index.php/claim/viewClaimModule']",
            buzzButton: "[href='/web/index.php/buzz/viewBuzz']",
        }
        return selectors
      }
      
    accessAdmin() {
        cy.get(this.selectortList().adminButton).click()         
    }   
    accessPIM() {        
        cy.get(this.selectortList().pimButton).click()
    }
    accessLeave() {  
        cy.get(this.selectortList().leaveButton).click()
    }  
    accessTime() {  
        cy.get(this.selectortList().timeButton).click()
    } 
    accessRecruitmente() {
        cy.get(this.selectortList().recruitmenteButton).click()
    } 
    accessMyInfo() {
        cy.get(this.selectortList().myInfoButton).click()
    }   
    accessPerformace() {
        cy.get(this.selectortList().performaceButton).click()
    }  
    accessDirectory() {
        cy.get(this.selectortList().directoryButton).click()
    }   
    // accessMaintenace() {
    //     cy.get(this.selectortList().maintenaceButton).click()
    // } 
    accessClam() {
        cy.get(this.selectortList().claimButton).click()
    } 
    accessBuzz() {          
        cy.get(this.selectortList().buzzButton).click()
    } 
    

    accessMenu() {
        cy.get(this.selectortList().adminButton).click()        
        cy.get(this.selectortList().pimButton).click()
        cy.get(this.selectortList().leaveButton).click()
        cy.get(this.selectortList().timeButton).click()
        cy.get(this.selectortList().recruitmenteButton).click()
        cy.get(this.selectortList().myInfoButton).click()
        cy.get(this.selectortList().performaceButton).click()
        cy.get(this.selectortList().directoryButton).click()
        //cy.get(this.selectortList().maintenaceButton).click()
        cy.get(this.selectortList().claimButton).click()
        cy.get(this.selectortList().buzzButton).click()
    } 
}

export default MenuPage