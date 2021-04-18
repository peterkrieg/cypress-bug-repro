import * as React from 'react';
import { mount } from '@cypress/react';
import { App } from './App';

it('should increment count when clicking button', () => {
  mount(<App />);
  cy.get('button').contains('increment').click();

  cy.get('p').contains('1');
});
