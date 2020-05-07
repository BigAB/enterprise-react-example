import React from 'react';
import { AppBar } from '@enterprise/design-system';
import { UserNavMenu } from './components/user-nav-menu';

export const App = () => {
  return (
    <>
      <AppBar heading="Initiative Manager">
        <UserNavMenu
          userAccount={{ id: '1', user: { id: 'ab123', name: 'Adam' } }}
        />
      </AppBar>
    </>
  );
};

export default App;
