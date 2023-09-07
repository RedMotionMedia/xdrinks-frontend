import React from 'react'
import About from '../../pages/about'

describe('<About />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<About />)
    cy.get('h1').contains('About Page')
  })
})