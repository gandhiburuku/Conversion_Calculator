  describe('ConversionCalculator test', () => {
    
    it('Finding Elements', () => {
       cy.visit('https://www.calculator.net/conversion-calculator.html')

       cy.contains('unitconverters.net.').click()
       cy.contains('Length').click()
       cy.contains('Temperature').click()
       cy.contains('Area').click()
       cy.contains('Volume').click()
       cy.contains('Weight').click()
       cy.get('.panel2').should('be.visible');
       cy.get('#calFrom').should('be.visible');
       cy.get('#calTo').should('be.visible');
       cy.get('#right').should('be.visible');

       cy.get('#calFrom > [value="1"]').should('be.visible');
       cy.get('#calFrom > [value="2"]').should('be.visible');
       cy.get('#calFrom > [value="3"]').should('be.visible');
       cy.get('#calFrom > [value="4"]').should('be.visible');
       cy.get('#calFrom > [value="5"]').should('be.visible');
       cy.get('#calFrom > [value="6"]').should('be.visible');
       cy.get('#calFrom > [value="7"]').should('be.visible');
       cy.get('#calFrom > [value="8"]').should('be.visible');
       cy.get('#calFrom > [value="9"]').should('be.visible');
       cy.get('#calFrom > [value="10"]').should('be.visible');

       cy.get('#calTo > [value="1"]').should('be.visible');
       cy.get('#calTo > [value="2"]').should('be.visible');
       cy.get('#calTo > [value="3"]').should('be.visible');
       cy.get('#calTo > [value="4"]').should('be.visible');
       cy.get('#calTo > [value="5"]').should('be.visible');
       cy.get('#calTo > [value="6"]').should('be.visible');
       cy.get('#calTo > [value="7"]').should('be.visible');
       cy.get('#calTo > [value="8"]').should('be.visible');
       cy.get('#calTo > [value="9"]').should('be.visible');
       cy.get('#calTo > [value="10"]').should('be.visible');
             
      })
      it('Count of elements',()=>{
        cy.visit('https://www.calculator.net/conversion-calculator.html')
        cy.url().should("include","calculator.html")
        cy.url().should("eq","https://www.calculator.net/conversion-calculator.html")
        cy.contains('Weight').click()
        cy.get("#menuon").should("be.visible")
        cy.get('div.panel2 table tbody tr td select#calFrom').select(0).invoke("val").should("eq", "1")
        cy.get('select[id="calFrom"]').select(0).should("have.value", "1")
        })
      
    })

  