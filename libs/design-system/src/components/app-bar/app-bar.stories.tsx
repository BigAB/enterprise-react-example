import React from 'react';
import { text } from '@storybook/addon-knobs';
import { AccountCircle } from '@material-ui/icons';
import { AppBar } from './app-bar';
import { NavigationMenu } from '../navigation-menu';

export default { title: 'AppBar' };

const actions = [
  {
    label: 'See Cart',
    href: './cart',
    callback() {
      console.log('Navigate to cart page');
    }
  },
  {
    label: 'Preferences',
    callback() {
      console.log('Open Preferences');
    }
  }
];

export const primary = () => (
  <AppBar heading={text('Heading', 'Initiative Manager')}>
    <NavigationMenu actions={actions}>
      <AccountCircle />
    </NavigationMenu>
  </AppBar>
);
