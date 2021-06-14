import {AppBar, IconButton, makeStyles, Menu, MenuItem} from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import {NavLink} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function Header() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>

                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"
                            onClick={handleClick}>
                    <MenuIcon/>
                </IconButton>

                <Menu
                    id="header"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <NavLink to={'/'}>
                        <MenuItem onClick={handleClose}>
                            Main
                        </MenuItem>
                    </NavLink>

                    <NavLink to={'/register'}>
                        <MenuItem onClick={handleClose}>
                            Register
                        </MenuItem>
                    </NavLink>

                    <NavLink to={'/login'}>
                        <MenuItem onClick={handleClose}>
                            Login
                        </MenuItem>
                    </NavLink>

                    <NavLink to={'/password_recovery'}>
                        <MenuItem onClick={handleClose}>
                            Recovery password
                        </MenuItem>
                    </NavLink>

                    <NavLink to={'/password_new'}>
                        <MenuItem onClick={handleClose}>
                            New password
                        </MenuItem>
                    </NavLink>

                    <NavLink to={'/profile'}>
                        <MenuItem onClick={handleClose}>
                            Profile
                        </MenuItem>
                    </NavLink>

                    <NavLink to={'/test'}>
                        <MenuItem onClick={handleClose}>
                            Test
                        </MenuItem>
                    </NavLink>

                    <NavLink to={'/404'}>
                        <MenuItem onClick={handleClose}>
                            404
                        </MenuItem>
                    </NavLink>
                </Menu>
            </Toolbar>
        </AppBar>
    );
}

export default Header;