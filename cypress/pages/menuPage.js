class MenuPage {
    selectorsList() {
        const selectors = {
            adminButtom: "[href='/web/index.php/admin/viewAdminModule']",
            PIMButtom: "[href='/web/index.php/pim/viewPimModule']",
            leaveButtom: "[href='/web/index.php/leave/viewLeaveModule']",
            timeButtom: "[href='/web/index.php/time/viewTimeModule']",
            recruitmenteButtom: "[href='/web/index.php/recruitment/viewRecruitmentModule']",
            myInfoButtom: "[href='/web/index.php/pim/viewMyDetails']",
            performaceButtom: "[href='/web/index.php/performance/viewPerformanceModule']",
            dashboardButtom: "[href='/web/index.php/dashboard/index']",
            directoryButtom: "[href='/web/index.php/directory/viewDirectory']",
            maintenceButtom: "[href='/web/index.php/maintenance/viewMaintenanceModule']",
            claimButtom: "[href='/web/index.php/maintenance/viewMaintenanceModule']",
            buzzButtom: "[href='/web/index.php/maintenance/viewMaintenanceModule']"
    
        }
        return selectors
    }

    acsessAdmin() {
        cy.get(this.selectorsList().adminButtom).click()    
    }

    acsessPIM() {       
        cy.get(this.selectorsList().PIMButtom).click()          
    }

    acsessLeave() {
        cy.get(this.selectorsList().leaveButtom).click()
    }

    acsessTime() {
        cy.get(this.selectorsList().timeButtom).click()
    }

    acsessRecruitmente() {
        cy.get(this.selectorsList().recruitmenteButtom).click()
    }
    
    acsessMyInfo() {
        cy.get(this.selectorsList().myInfoButtom).click()
    }

    acsessPerformace() {
        cy.get(this.selectorsList().performaceButtom).click()
    }

    acsessDashboard() {
        cy.get(this.selectorsList().dashboardButtom).click()
    }

    acsesDirectory() {
        cy.get(this.selectorsList().directoryButtom).click()
    }

    acsessMaintence() {
        cy.get(this.selectorsList().maintenceButtom).click()
    }

    acsessClaim() {
        cy.get(this.selectorsList().claimButtom).click()
    }
    
    acsessBuzz() {
        cy.get(this.selectorsList().buzzButtom).click()
    }
}

export default MenuPage