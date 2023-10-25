// import {authProvider} from "../utils/googleProvider"
import { Button } from 'react-admin';
import { useMediaQuery, useTheme } from '@mui/material';



// const GOOGLE_CLIENT_ID = '654868766388-l165egll3330ikvpf734diu2lf54uehc.apps.googleusercontent.com';

export const GoogleButton = () => {
    const theme = useTheme();
    const isMediumScreen = useMediaQuery(theme.breakpoints.up('md'));

    // const handleLoginWithGoogle = () => {
    //     authProvider.login();
    // };

    return (

        <Button
            variant="outlined"
            sx={{
                color: '#38A505',
                border: '1px solid #36D446',
                px: isMediumScreen ? 4 : 2,
                py: 1,
                display: 'flex',
                alignItems: 'center',
            }}
        >
            {isMediumScreen && 'Continue with Google'}
        </Button>
    );
};


/*import React from 'react';
// import { GoogleLogin } from 'react-google-login';
// import {authProvider} from "../utils/googleProvider"
import { Button } from 'react-admin';

// const GOOGLE_CLIENT_ID = '654868766388-l165egll3330ikvpf734diu2lf54uehc.apps.googleusercontent.com';

export const GoogleButton = () => {
    // const handleLoginWithGoogle = () => {
    //     authProvider.login();
    // };

    return (

        <Button
            variant="outlined"

            sx={{ color: '#38A505', border: '1px solid #36D446', px: 4, py: 1 }}
        // onClick={handleLoginWithGoogle}
        >
            Continue with  Google
        </Button>

    );
};*/