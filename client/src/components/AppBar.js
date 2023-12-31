import * as React from 'react';
import { AppBar, TitlePortal, UserMenu } from 'react-admin';
import { MenuItem, ListItemIcon } from '@mui/material';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import Face6Icon from '@mui/icons-material/Face6';

import { Logo } from './Logo';
import { SigninButton } from './SigninButton';
import { LogoutButton } from './LogoutButton';
import { ProfileButton } from './ProfileButton';

export const MyAppBar = () => {
    const [isAuthenticated, setIsAuthenticated] = React.useState(true); // Initialize to true or false based on your initial state

    const handleLogout = () => {
        setIsAuthenticated(prevIsAuthenticated => !prevIsAuthenticated); // Toggle isAuthenticated
    };

    return (
        <AppBar color='inherit' sx={{ p: 0 }} userMenu={isAuthenticated ? (
            <UserMenu>
                <MenuItem onClick={handleLogout}>
                    <ListItemIcon>
                        <ContactPageIcon fontSize="small" />
                    </ListItemIcon>
                    <ProfileButton />
                </MenuItem>
                <MenuItem onClick={handleLogout} >
                    <ListItemIcon>
                        <Face6Icon fontSize="small" />
                    </ListItemIcon>
                    <LogoutButton />
                </MenuItem>
            </UserMenu>
        ) : false}>
            <Logo />
            <TitlePortal />
            {isAuthenticated ? null : <SigninButton />}
        </AppBar>
    );
};


/*import { Logo } from './Logo';
import * as React from 'react';
import { AppBar, TitlePortal, useAuthenticated } from 'react-admin';
import { SignupButton } from './SignupButton';
import { LogoutButton } from './LogoutButton';


export const MyAppBar = () => {
    //const isAuthenticated = useAuthenticated();
    const isAuthenticated = false;
    return (
        <AppBar userMenu={false} color='inherit' sx={{ p: 0 }} >
            <Logo />
            <TitlePortal />
            {isAuthenticated ? <LogoutButton /> : <SignupButton />}
        </AppBar>

    );
}*/