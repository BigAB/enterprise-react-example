import React, { useState, ReactNode } from 'react';
import { Button, IconButton, MenuItem, Menu } from '@material-ui/core';
import styled from 'styled-components';

export interface NavigationMenuActions {
  label: string;
  href?: string;
  callback?: (event?: React.MouseEvent<HTMLElement>) => void;
}

export interface NavigationMenuProps {
  actions?: NavigationMenuActions[];
  ariaLabel?: string;
  ariaId?: string;
  children: ReactNode;
}

const Anchor = styled.a.attrs({
  rel: 'noreferrer noopener'
})`
  color: inherit;
  text-decoration: inherit;
`;

export const NavigationMenu = ({
  actions = [],
  ariaLabel,
  ariaId,
  children
}: NavigationMenuProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (actions.length) {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = (
    event: React.MouseEvent<HTMLElement>,
    action?: NavigationMenuActions
  ) => {
    if (action?.callback) {
      event.preventDefault();
      action.callback(event);
    }
    setAnchorEl(null);
  };

  const element =
    typeof children === 'string' ? (
      <Button
        aria-label={ariaLabel}
        aria-controls={ariaId}
        aria-haspopup="true"
        color="inherit"
        onClick={handleClick}
      >
        {children}
      </Button>
    ) : (
      <IconButton
        aria-label={ariaLabel}
        aria-controls={ariaId}
        aria-haspopup="true"
        color="inherit"
        onClick={handleClick}
      >
        {children}
      </IconButton>
    );

  return (
    <div>
      {element}
      <Menu
        id={ariaId}
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={(event: React.MouseEvent<HTMLElement>) => handleClose(event)}
      >
        {actions.map(action => (
          <MenuItem
            key={action.label}
            onClick={event => handleClose(event, action)}
          >
            {action.href ? (
              <Anchor href={action.href}>{action.label}</Anchor>
            ) : (
              action.label
            )}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};
