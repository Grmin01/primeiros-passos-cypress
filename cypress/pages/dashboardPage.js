class DashBoardPage {
    selectorsList() {
        const selectors = {
            dashboardGrid: ".orangehrm-dashboard-grid",
            selectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",        
        }
        return selectors    
    }

    checkDashBoard () {            
            cy.get(this.selectorsList().dashboardGrid)  // verificando so com elemento existente
            cy.get(this.selectorsList().selectionTitleTopBar).contains('Dashboar') //confirma por palavras cotinda em algum titulo
    }
}

export default DashBoardPage