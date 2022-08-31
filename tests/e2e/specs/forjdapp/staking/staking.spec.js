const { getSynpressPath } = require("@synthetixio/synpress/helpers");

describe('Staking e2e Test', () => {

    it('Connects with Metamask', () => {
        cy.clearLocalStorage();
        cy.setupMetamask('bone security reveal tomorrow angle cup remind smoke ivory bright cruise broken', 'rinkeby', 'forj12345678');
	    cy.visit("https://bswap-staging.vercel.app");
        cy.contains('Connect Wallet').click();
        cy.contains('Login with Metamask').click();
        cy.acceptMetamaskAccess().should("be.true");
    })
    it('Stake some Bondly tokens', () => {
        cy.switchToCypressWindow();
        cy.wait(10000);
        cy.contains('Stake').click();
        cy.get('[data-test-id="staking-input"]').type('100');
        cy.get('#page-content > div > div > div.sc-lkCHeq.EIhkv > div.sc-cvnuvz.jxNYaY > div.sc-kdjpcd.dZTdFP > div > div.sc-jdHRdX.fqxDLX > div.sc-gsnTZi.dRsHiZ > span').click();
        cy.confirmMetamaskTransaction();
        cy.get('#page-content > div > div > div.sc-hWlEnr.ehFUWm > div', { timeout: 70000 }).should(($el) => {
            expect(Cypress.dom.isAttached($el), 'is attached').to.eq(false);
        });
        cy.get('#root > div.sc-ezWOiH.fvyNFh > div', {timeout: 50000}).should('not.be.visible');
        cy.disconnectMetamaskWalletFromDapp();
        cy.resetMetamaskAccount();
        //cy.wait(10000);
        //cy.contains('...').should('be.visible');
    })
  })