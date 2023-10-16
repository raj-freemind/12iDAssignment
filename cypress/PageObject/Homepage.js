class Homepage {
    visit() {
        cy.visit('http://localhost:3000')
        cy.title().should('eq', 'Simple Calculator')
    }

    setAValue(afirstvalue) {
        // const field = cy.get('#a')
        // field.type(afirstvalue)
        // return this
        cy.get('#a').type(afirstvalue)
    }

    SetBValue(asecondvalue) {
        cy.get('#b').type(asecondvalue)
    }
    AddClick() {
        cy.get('#addBtn').click()
    }
    DivideClick() {
        cy.get('#devideBtn').click()
    }
    VerifyaddResult(resultvalue) {
        cy.get('#result').should('have.text', "Result: " + resultvalue)
        //we can use different type of assertion in here 
    }
    VerifydevideResult(resultvalue) {
        cy.get('#result').should('have.text', "Result: " + resultvalue)
        //we can use different type of assertion in here 
    }


}
export default Homepage