/// <reference types="cypress" />

//funcionalidads
describe('Cadastrar dispositivos', () => {

  //cenarios de testes

    it('Cadastrar dispositivos com sucesso', () => {
      cy.request({
        method: 'POST',
        url: 'https://api.restful-api.dev/objects',
        body: {
          "name": "Pc gamer PRO",
          "data": {
             "year": 2024,
             "price": 3000.00,
             "CPU model": "Intel Core i9",
             "Hard disk size": "2 TB"
          }
       }
      
      })
        .then((response) => {
          expect(response.status).to.equal(200)
          expect(response.body.name).to.equal('Pc gamer PRO')
        })
       

    })

})