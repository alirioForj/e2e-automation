describe ('Cryptosaurus subscribe function', () =>{
    it('User subscribes', () => {
        cy.visit("https://www.cryptosaurs.ai/home?enableFreeMinting=1");
        cy.contains("Subscribe to mailing list").click();
        cy.get(".subscribe-input").type("Test");
        cy.get(".subscribe-btn").click();
        cy.get(".subscribe-input").type("aliriom@forj.network");
        cy.get(".subscribe-btn").click();
        //cy.get(".subscribe-input").type("0xA6735458e49F2450E78f2927E5D8B12aE4A7C43c");
        //cy.get(".subscribe-btn").click();
        cy.get("#__next > div > div.content.css-0 > div.css-1rr4qq7 > div > div > div:nth-child(2) > div > div > p").should("be.visible");
        cy.contains('...').should('be.visible');
    })
})