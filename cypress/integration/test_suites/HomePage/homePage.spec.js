/// <reference types="Cypress" />

import HomePage from '../../../support/POM/HomePage';

describe('Home Page Test suite', function () {

    before('', function () {
        cy.fixture('testData').then(function(data) {
            this.data = data
        })
        cy.visit(Cypress.env('url'));
    });

    beforeEach('', function () {
        
    });

    it.skip('check the banner text', function () {
        let homePage = new HomePage();
        homePage.getBannerText().then(function (element) {
            let extractedText = element.text();
            expect(extractedText.trim()).to.equal('Discover the great cities of the world with Big Bus Tours')
        });
    });

    it.skip('check the DE language can selected', function () {
        let homePage = new HomePage();

        homePage.getLanguageSelection().click();
        homePage.getLanguageDropDownList().each(function(element, index, elements) {
            let elementText = element.text().trim();
            cy.log(element)
            if(elementText === "DE") {
                cy.get(element).click();
            }
        });
    });

    it.skip('check the user entered city is showing in search box', function () {
        let homePage = new HomePage();

        homePage.getMainSearchBox().click();
        cy.get('#search-city-overlay').type('D');
        cy.get('div[class="autocomplete-suggestion"]').each(function (element, index, elements)  {
            cy.get(element).invoke('attr', 'data-city').then(function (customElement) {
                if(customElement === 'Darwin') {
                    cy.wait(10000)
                    cy.get(`div[class="autocomplete-suggestion"]:nth-child(${index + 1}) b`).trigger('mouseover').dblclick({ force: true });
                }
            });
        });
    });

    it('slecting Europe and click London', function () {
        cy.get('div[class="region-name"]').each(function(element, index, elements) {
            if(element.text() === "Europe") {
                cy.get(element).click();
                cy.wait(10000)
                cy.get('.active > .region-info > .cities-list > :nth-child(1) > .btn').debug();
                cy.wait(10000);
                cy.get('.active > .region-info > .cities-list > :nth-child(1) > .btn').click();
            }
        });

    })


});




// Callback
// var func1 = function (data) {
//     console.log('got data: ' + data);
// };

// var func2 = function (callback) {
//     callback('get it?');
// };

// func2(func1);