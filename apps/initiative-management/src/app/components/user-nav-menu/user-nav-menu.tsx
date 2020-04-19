import React, { FC } from 'react';
import { AccountCircle } from '@material-ui/icons';
import {
  NavigationMenu,
  NavigationMenuActions
} from '@enterprise/design-system';
import { User } from '@enterprise/domain-types';

interface UserNavMenuProps {
  user?: User | null;
}

export const UserNavMenu: FC<UserNavMenuProps> = ({
  user
}: UserNavMenuProps) => {
  if (!user) {
    return null;
  }
  const actions: NavigationMenuActions[] = [
    {
      label: 'Profile',
      href: './profile',
      callback(ev) {
        console.log('Profile', user);
      }
    },
    {
      label: 'Logout',
      callback() {
        console.log('Logout', user);
      }
    }
  ];

  return (
    <NavigationMenu actions={actions}>
      <AccountCircle />
    </NavigationMenu>
  );
};

export default UserNavMenu;
