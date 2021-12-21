describe('The Purple Dot Code Exercise Homepage', () => {
  beforeEach(() => {
    cy.window().then((win) => {
      win.sessionStorage.clear();
    });

    cy.task('clearDb');
  });

  it('welcomes you to the exercise', () => {
    cy.visit('/');
    cy.get("[data-test-id='welcome-message']").should((elem) => {
      expect(elem.text()).to.equal('Welcome to your code exercise!');
    });
  });
});
