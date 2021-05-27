export default class HomePage {

    getBannerText(){
        return cy.get('h1[class="page-caption"]');
    }

    getLanguageSelection() {
        return cy.get('div[class="action toggle switcher-trigger"]');
    }

    getLanguageDropDownList() {
        return cy.get('ul[class="dropdown switcher-dropdown ui-dialog-content ui-widget-content"] li')
    }

    getMainSearchBox() {
        return cy.get('#search-city');
    }

}