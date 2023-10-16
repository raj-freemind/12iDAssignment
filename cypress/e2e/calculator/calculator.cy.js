import Homepage from "../../PageObject/Homepage"
import TestData from "../../fixtures/AddTestData.json"
import DTestData from "../../fixtures/DivideTestData.json"

describe('The Home Page', () => {
    it('successfully loads', () => {
        const log = new Homepage()
        log.visit()
        cy.title().should('eq', 'Simple Calculator')
    })
})

describe('Adding Two Numbers', () => {
    const log = new Homepage()

    beforeEach(() => {
        log.visit()
        cy.title().should('eq', 'Simple Calculator')
    })
    //TestData has a test case data and we can added other test scenario
    TestData.forEach((item, k) => {
        it(item.Test_case_name, () => {
            log.setAValue(item.ValueOfA)
            log.SetBValue(item.ValueofB)
            log.AddClick()
            log.VerifyaddResult(item.expect_result)
        })

    })
})


describe('Dividing Two Numbers', () => {
    //We can use following approach also
    // it('positive even interger divide by positive even integer', () => {
    //     const log = new Homepage()
    //     log.visit()
    //     cy.title().should('eq', 'Simple Calculator')
    //     log.setAValue(4)
    //     log.SetBValue(2)
    //     log.DivideClick()
    //     log.VerifyResult(2)
    // })

    // Use Page Object Model
    const log = new Homepage()

    beforeEach(() => {
        log.visit()
        cy.title().should('eq', 'Simple Calculator')
    })

    DTestData.forEach((item, k) => {
        it(item.Test_case_name, () => {
            log.setAValue(item.ValueOfA)
            log.SetBValue(item.ValueofB)
            log.DivideClick()
            log.VerifydevideResult(item.expect_result)
        })

    })

})
