describe('Calculadora', () => {
    beforeEach(() => {
      cy.visit('http://127.0.0.1:5500/calculadora.html'); // URL da minha calculadora
    });
  
    it('soma 2 + 3 e retorna 5', () => {
      cy.get('[data-cy=numero-2]').click();
      cy.get('[data-cy=operador-soma]').click();
      cy.get('[data-cy=numero-3]').click();
      cy.get('[data-cy=igual]').click();
      cy.get('[data-cy=resultado]').should('have.text', '5');
    });
  
    it('subtrai 5 - 3 e retorna 2', () => {
      cy.get('[data-cy=numero-5]').click();
      cy.get('[data-cy=operador-subtracao]').click();
      cy.get('[data-cy=numero-3]').click();
      cy.get('[data-cy=igual]').click();
      cy.get('[data-cy=resultado]').should('have.text', '2');
    });
  
    it('multiplica 5 * 3 e retorna 15', () => {
      cy.get('[data-cy=numero-5]').click();
      cy.get('[data-cy=operador-multiplicacao]').click();
      cy.get('[data-cy=numero-3]').click();
      cy.get('[data-cy=igual]').click();
      cy.get('[data-cy=resultado]').should('have.text', '15');
    });
  
    it('divide 6 / 3 e retorna 2', () => {
      cy.get('[data-cy=numero-6]').click();
      cy.get('[data-cy=operador-divisao]').click();
      cy.get('[data-cy=numero-3]').click();
      cy.get('[data-cy=igual]').click();
      cy.get('[data-cy=resultado]').should('have.text', '2');
    });
  
    it('erro ao dividir por zero', () => {
      cy.get('[data-cy=numero-6]').click();
      cy.get('[data-cy=operador-divisao]').click();
      cy.get('[data-cy=numero-0]').click();
      cy.get('[data-cy=igual]').click();
      cy.get('[data-cy=resultado]').should('contain.text', 'Erro');
    });
  });
  