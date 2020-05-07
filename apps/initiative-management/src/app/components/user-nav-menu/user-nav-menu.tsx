import React, { FC, useEffect } from 'react';
import { AccountCircle } from '@material-ui/icons';
import {
  NavigationMenu,
  NavigationMenuActions,
} from '@enterprise/design-system';
import { UserAccount } from '@enterprise/domain-types';
import { useDispatch, useSelector } from 'react-redux';
import { projectsActions, projectsSelectors } from '@enterprise/shared';

interface UserNavMenuProps {
  userAccount?: UserAccount | null;
}

export const UserNavMenu: FC<UserNavMenuProps> = ({
  userAccount,
}: UserNavMenuProps) => {
  const projects = useSelector(projectsSelectors.selectAll);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(projectsActions.projectsRequested());
  }, [dispatch]);

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
