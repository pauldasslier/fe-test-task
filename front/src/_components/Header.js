import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import Link from '@material-ui/core/Link';
import MenuItem from '@material-ui/core/MenuItem';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

const menuItems = [
  { to: '/', label: 'Game' },
  { to: '/score', label: 'Score' },
];

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton 
          edge="start" 
          color="inherit" 
          aria-label="menu"
          onClick={(e) => setAnchorEl(e.target)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h5">
          Tic taс toe
        </Typography>
      </Toolbar>
      {anchorEl && (
        <Menu
          open
          keepMounted
          id="simple-menu"
          anchorEl={anchorEl}
          onClose={handleClose}
        >
          {menuItems.map(({ to, label }) => (
            <MenuItem key={`${to}${label}`} onClick={handleClose}>
              <Link
                to={to}
                underline="none"
                component={NavLink}
              >
                {label}
              </Link>
            </MenuItem>
          ))}
        </Menu>
      )}
    </AppBar>
  );
};

export default Header;