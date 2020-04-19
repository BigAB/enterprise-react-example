import React from 'react';
import { object } from '@storybook/addon-knobs';
import { AccountCircle } from '@material-ui/icons';
import { NavigationMenu, NavigationMenuActions } from './navigation-menu';

export default { title: 'NavigationMenu' };

export const primary = () => {
  const actions: NavigationMenuActions[] = [
    {
      label: 'Profile',
      href: './profile',
      callback(ev) {
        console.log('Profile');
      }
    },
    {
      label: 'Logout',
      callback() {
        console.log('Logout');
      }
    }
  ];
  const actionKnob = object('Actions', actions);
  return (
    <NavigationMenu actions={actionKnob}>
      <AccountCircle />
    </NavigationMenu>
  );
};
