const { getSynpressPath } = require("@synthetixio/synpress/helpers");

describe('Mint Cryptosaurs NFT', () => {

    it('Connects with Metamask', () => {
        cy.clearLocalStorage();
        cy.setupMetamask('bone security reveal tomorrow angle cup remind smoke ivory bright cruise broken', 'polygon', 'forj12345678');  
    })
    it('Mint some mystery boxes', () => {
        cy.switchToCypressWindow();
        cy.visit("https://www.cryptosaurs.ai/home?enableFreeMinting=1");        
        cy.contains("Get your FREE NFT").click();
        cy.get(".subscribe-input").type("Test");
        cy.get(".subscribe-btn").click();
        cy.get(".subscribe-input").type("aliriom@forj.network");

        cy.confirmCaptcha();
        cy.wait(2000);
        cy.contains("Next").click();
        cy.get(".css-s2o3f7").click();

        cy.acceptMetamaskAccess().should("be.true");
        
        cy.contains("Please wait, we are Forjing your NFT!", {timeout: 60000}).should("not.be.visible");
        cy.contains("Congratulations").should("be.visible");
        
        cy.disconnectMetamaskWalletFromDapp();
        cy.resetMetamaskAccount();
    })
  })