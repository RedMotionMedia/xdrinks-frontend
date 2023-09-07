import React from 'react'
import Home from '../../pages'

describe('<Home />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Home />)
    cy.get('p').contains('Drinks')
  })
})