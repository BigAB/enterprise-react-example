import React, { ReactNode } from 'react';
import {
  AppBar as MaterialAppBar,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      flexGrow: 1,
    },
  })
);

export interface AppBarProps {
  heading?: string | null;
  children?: ReactNode;
}

export const AppBar = ({ heading, children }: AppBarProps): JSX.Element => {
  const { title } = useStyles();

  return (
    <MaterialAppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={title}>
          {heading}
        </Typography>
        {children}
      </Toolbar>
    </MaterialAppBar>
  );
};
