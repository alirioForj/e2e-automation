const { getSynpressPath } = require("@synthetixio/synpress/helpers");

describe('Mint Mystery Boxes', () => {

    it('Connects with Metamask', () => {
        cy.clearLocalStorage();
        cy.setupMetamask('bone security reveal tomorrow angle cup remind smoke ivory bright cruise broken', 'rinkeby', 'forj12345678');
	    cy.visit("https://mysterybox-demo-updated.netlify.app/");
        //get the connect wallet button
        cy.acceptMetamaskAccess().should("be.true");
    })
    it('Mint some mystery boxes', () => {
        cy.switchToCypressWindow();
        cy.wait(10000);
        cy.disconnectMetamaskWalletFromDapp();
        cy.resetMetamaskAccount();
    })
  })