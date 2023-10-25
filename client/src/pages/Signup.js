import React from 'react';
import { Link } from 'react-router-dom';

import {ThemeProvider , useMediaQuery, Box, Grid,Typography} from '@mui/material';

import { GoogleButton } from '../components/GoogleButton';
import { theme } from '../themes/theme';

export const Signup = () => {
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            xs zeroMinWidth
        >
            <Box
                sx={{
                    p: 4,
                    background: 'rgba(255, 255, 255, 0.75)',
                    borderRadius: '40px',
                    height: '60vh',
                    
                    maxHeight: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                  <ThemeProvider theme={theme}>
                    {!isSmallScreen && (
                        <>
                            <Typography variant='h5' sx={{ my: 2 }}>
                                Welcome to{' '}
                                <Typography component='span' variant='h5' sx={{ color: '#38A505', display: 'inline' }}>
                                    Smart Farm
                                </Typography>
                            </Typography>
                            <Typography variant='h3' sx={{ color: '#38A505', display: 'inline', m: 'auto' }}>
                                Sign Up
                            </Typography>
                        </>
                    )}
                    <GoogleButton sx={{ m: 'auto' }} />
                    <Link to="/signin" style={{ textDecoration: 'none', color: 'black', margin: 'auto' }}>
                        <Typography variant='h6' sx={{ mt: 'auto' }}>
                            {'Do you have an account? '}
                            <Typography component='span' sx={{ color: '#38A505', display: 'inline' }}>
                                Sign In
                            </Typography>
                        </Typography>
                    </Link>
                </ThemeProvider>
            </Box>
        </Grid>
    );
};



/*import React from 'react';
import { GoogleButton } from '../components/GoogleButton';
import signBack from '../static/image.png'
import { Box, Paper, Typography } from '@mui/material';
export const Signup = () => {
    return (
        <Paper
            sx={{
                backgroundImage: `url(${signBack})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                height: '100%',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundPosition: 'center',
            }}
        >
            <Box
                sx={{
                    background: 'rgba(255, 255, 255, 0.75)',
                    padding: '20px',
                    borderRadius: '40px',
                    height: '60%',
                    width: '25%',
                    display: 'flex',
                    // justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pb: 5
                }}>
        <Typography variant='h6' sx={{ mb: 2 }}>
                    Welcome to{' '}
                    <Typography component='span' variant='h6' sx={{ color: '#38A505', display: 'inline', mb: 4 }}>
                        Smart Farm
                    </Typography>
                </Typography>
                <Typography  variant='h4' sx={{ color: '#38A505', display: 'inline', my: 5,}}>
                        Sign Up
                    </Typography>
                <GoogleButton sx={{my: 5}}/>
                <Typography sx={{  mt: 'auto' }}>
                    {'Do you have an account? '}
                    <Typography component='span' sx={{ color: '#38A505', display: 'inline',  }}>
                        Sign In
                    </Typography>
                </Typography>
            </Box>
        </Paper>
    );
};*/