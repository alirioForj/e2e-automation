const { getSynpressPath } = require("@synthetixio/synpress/helpers");

describe('Shop public e2e Test', () => {

    it('Connects with Metamask', () => {
        cy.clearLocalStorage();
        cy.setupMetamask('bone security reveal tomorrow angle cup remind smoke ivory bright cruise broken', 'rinkeby', 'forj12345678');
	    cy.visit("https://bswap-staging.vercel.app");
        cy.contains('Connect Wallet').click();
        cy.contains('Login with Metamask').click();
        cy.acceptMetamaskAccess().should("be.true");
    })
    it('Purchase an NFT', () => {
        cy.switchToCypressWindow();
        cy.wait(10000);
        cy.get('#root > div.sc-ikZpkk.jImqNU > div.sc-kLLXSd.eLmPlw > div.sc-llJcti.lihOuX > div > div.sc-bBrHrO.eTbcGN').realHover('mouse');
        cy.contains('Shop').click();
        cy.get('#root > div.sc-ikZpkk.jImqNU > div.sc-kLLXSd.eLmPlw > div.sc-llJcti.lihOuX > div > div.sc-bBrHrO.eTbcGN > a.sc-kgflAQ.gZkxJJ').realHover('mouse');
        cy.get('#page-content > div > div > div > div > div.sc-iNFqmR.fXovkx > div.sc-iyOMks.OeAhp').should('be.visible');
        cy.get('#page-content > div > div > div > div > div.sc-iNFqmR.fXovkx > div.sc-iyOMks.OeAhp').click();
        cy.get('#page-content > div > div > div > div > div.sc-iNFqmR.fXovkx > div.ant-carousel > div > div > div > div.slick-slide.slick-active.slick-current').click();


        cy.disconnectMetamaskWalletFromDapp();
        cy.resetMetamaskAccount();
    })
  })