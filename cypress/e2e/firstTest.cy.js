describe('template spec', () => {
  it('Fluxo de compra Passagem', () => {
    cy.visit('https://www.ryanair.com/pt/pt')

    // Aceitar cookies
    cy.get('[data-ref="cookie.accept-all"]').should('be.visible').click()

    // Selecionar destino
    cy.get('#input-button__destination').type('dublin')
    cy.get('.list__airports-scrollable-container > :nth-child(2) > .body-l-lg > span').should('be.visible').click()

    // Selecionar datas
    cy.get(':nth-child(5) > .m-toggle__month').should('be.visible').click()

    // Adicionar um tempo de espera para garantir que o calendário carregue corretamente
    cy.wait(2000)

    // Garantir que o dia 19 não esteja desativado antes de clicar
    cy.get('.datepicker__calendar--left .calendar-body__cell').contains('19').should('not.have.class', 'calendar-body__cell--disabled').click({ force: true })

    // Adicionar um tempo de espera para garantir que a seleção do primeiro dia seja registrada
    cy.wait(1000)

    // Garantir que o dia 20 não esteja desativado antes de clicar
    cy.get('.datepicker__calendar--left .calendar-body__cell').contains('20').should('not.have.class', 'calendar-body__cell--disabled').click({ force: true })

    // Rolagem até o botão e clicar com force: true
    cy.get('.flight-search-widget__start-search-cta').scrollIntoView().should('be.visible').click({ force: true })

    // Adicionar tempo de espera para garantir que a página de resultados do voo esteja carregada
    cy.wait(5000)

    // Selecionar voo de ida
    cy.get('.flight-card-summary__footer > .flight-card-summary__select-btn').first().as('selectOutboundFlight')
    cy.get('@selectOutboundFlight').scrollIntoView().should('be.visible').click()

    // Adicionar tempo de espera para garantir que a página de seleção de voos de volta esteja carregada
    cy.wait(5000)

    // Selecionar voo de volta
    cy.get('.flight-card-summary__footer > .flight-card-summary__select-btn').eq(1).as('selectReturnFlight')
    cy.get('@selectReturnFlight').scrollIntoView().should('be.visible').click()

    // Selecionar tarifa
    cy.get('[data-e2e="fare-card-standard"] .fare-table__fare-column-border').should('be.visible').click()
    cy.get(':nth-child(2) > fare-table-upgrade-footer .fare-footer__submit-btn').scrollIntoView().should('be.visible').click()

    // Pular login
    cy.get('.login-touchpoint__login-later').should('be.visible').click()

    // Preencher informações do passageiro
    cy.get('.dropdown__toggle').should('be.visible').click()
    cy.get('[data-ref="title-item-1"] > .dropdown-item__link').should('be.visible').click()
    cy.get('input[name="form.passengers.ADT-0.name"]').type('Cheila')
    cy.get('input[name="form.passengers.ADT-0.surname"]').type('de Paula')
    cy.get('.continue-flow__button').should('be.visible').click()

    // Selecionar bagagem
    cy.get('[data-ref="product.small-bag"] .ry-radio-circle-button__label').should('be.visible').click()
    cy.get('.ry-button--gradient-yellow').should('be.visible').click()

    // Selecionar assentos
    cy.get(':nth-child(3) .seats-container__button-content').should('be.visible').click()
    cy.get('.reinforcement-message__buttons-container > .ry-button--gradient-yellow').should('be.visible').click()

    // Pular upsell
    cy.get('.upsell-modal__actions > .ry-button--anchor-blue').should('be.visible').click()
    cy.get('.enhanced-takeover__product-dismiss-cta').should('be.visible').click()

    // Confirmar detalhes
    cy.get('.airport-and-flight__cta').scrollIntoView().should('be.visible').click()
    cy.get('.transport__cta').scrollIntoView().should('be.visible').click()

    // Asserção na página final
    cy.get('.kyc-iframe').should('be.visible')
  })
})








  






    





