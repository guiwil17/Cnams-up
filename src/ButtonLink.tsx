import { Button, IconButton, Link as MuiLink } from '@material-ui/core';
import React from 'react';
import {
  Link as RouterLink,
  LinkProps,
  NavLink as RouterNavLink,
  NavLinkProps,
} from 'react-router-dom';

export const AdapterLink: React.FC<LinkProps> = React.forwardRef<
  HTMLAnchorElement,
  LinkProps
>((props, ref) => <RouterLink innerRef={ref} {...props} />);

export const AdapterNavLink: React.FC<NavLinkProps> = React.forwardRef<
  HTMLAnchorElement,
  NavLinkProps
>((props, ref) => <RouterNavLink innerRef={ref} {...props} />);

export const ButtonLink: React.FC<
  Exclude<React.ComponentProps<typeof Button>, 'component'> & LinkProps
> = props => {
  return <Button component={AdapterLink} {...props} />;
};

export const Link: React.FC<
  Exclude<React.ComponentProps<typeof MuiLink>, 'component'> & LinkProps
> = props => {
  return <MuiLink component={AdapterLink} {...props} />;
};

export const IconButtonLink: React.FC<
  Exclude<React.ComponentProps<typeof IconButton>, 'component'> & LinkProps
> = props => {
  return <IconButton component={AdapterLink} {...props} />;
};
