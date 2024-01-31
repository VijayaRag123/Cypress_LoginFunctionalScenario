describe("Application for regression testing",function(){
    it.only("critical features of  testing",function(){

        //Visit to certain page 
        cy.visit("https://dev.dubpro.ai/")

        //function testing 
        cy.get('.navLinks > .ant-btn > .ant-space > :nth-child(1)').click()
        cy.get('.navLinks > [href="/video-gallery"]').click(); //verify the video gallery button 
        cy.get('.navLinks > [href="/pricing"]').click()// verifying the  pricing menu
        cy.url().should('include','pricing')

    });
    it("login the user",function(){
        cy.visit("https://dev.dubpro.ai/")

        cy.get('.navLinks').click()// login 

        //enter the login credentials

        cy.get('[name="email"]').type("helloworld@gmail.com")
        cy.get('.inputContainer > #email').type('12344')
        cy.get(':nth-child(6) > .button').click()


    })

})