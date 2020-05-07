import React, { FC } from 'react';
import { AccountCircle } from '@material-ui/icons';
import {
  NavigationMenu,
  NavigationMenuActions,
} from '@enterprise/design-system';
import { UserAccount } from '@enterprise/domain-types';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { useProjects } from '@enterprise/providers/projects';

interface UserNavMenuProps {
  userAccount?: UserAccount | null;
}

export const UserNavMenu: FC<UserNavMenuProps> = ({
  userAccount,
}: UserNavMenuProps) => {
  const [projects] = useProjects();

  if (!userAccount) {
    return null;
  }
  const actions: NavigationMenuActions[] = [
    {
      label: 'Profile',
      href: './profile',
      callback(ev) {
        // console.log('PROFILE', project1);
      },
    },
    {
      label: 'Logout',
      callback() {
        console.log('projects', projects);
      },
    },
  ];

  return (
    <NavigationMenu actions={actions}>
      <AccountCircle />
    </NavigationMenu>
  );
};

export default UserNavMenu;
