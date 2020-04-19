import React from 'react';
import { AppBar } from '@enterprise/design-system';
import { UserNavMenu } from './components/user-nav-menu';

export const App = () => {
  return (
    <>
      <AppBar heading="Initiative Manager">
        <UserNavMenu user={{ name: 'Adam', id: '1' }} />
      </AppBar>
    </>
  );
};

export default App;
