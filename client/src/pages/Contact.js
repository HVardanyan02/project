import React from 'react';
import {
  ThemeProvider,
  useMediaQuery,
  Box,
  Grid,
  Typography,
  TextField,
  MenuItem,
} from '@mui/material';
import { SaveButton } from '../components/SaveButton';
import { theme } from '../themes/theme';
import signBack from '../assets/static/signBack.png';

const community = [
  {
    value: 'Community1',
    label: 'Community1',
  },
  {
    value: 'Community2',
    label: 'Community2',
  },
];

export const Contact = () => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        xs={12}
        zeroMinWidth
        sx={{
          backgroundImage: `url(${signBack})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          padding: '0',
        }}
      >
        <Box
          sx={{
            p: 4,
            background: 'rgba(255, 255, 255, 0.75)',
            borderRadius: '40px',
            height: 'auto',
            maxHeight: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {!isSmallScreen && (
            <>
              <Typography
                component="span"
                variant="h5"
                sx={{ color: '#38A505', display: 'inline', mb: 4 }}
              >
                Smart Farm
              </Typography>
              <Typography variant="h4" sx={{ display: 'inline', mb: 10 }}>
                Enter your contacts
              </Typography>
            </>
          )}
          <TextField
            id="filled-select-community"
            select
            label="Select Community"
            variant="filled"
            color="primary"
            sx={{
              width: '100%',
              mb: 3,
            }}
          >
            {community.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            label="Phone number"
            variant="filled"
            color="primary"
            sx={{ width: '100%', mb: 3 }}
          />

          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <SaveButton />
          </Box>
        </Box>
      </Grid>
    </ThemeProvider>
  );
};



/*import React from 'react';
import {
  ThemeProvider,
  useMediaQuery,
  Box,
  Grid,
  Typography,
  TextField,
  MenuItem,
} from '@mui/material';
import { SaveButton } from '../components/SaveButton';
import { theme } from '../themes/theme';
import signBack from '../assets/static/signBack.png';

const community = [
  {
    value: 'Community1',
    label: 'Community1',
  },
  {
    value: 'Community2',
    label: 'Community2',
  },
];

export const Contact = () => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        xs={12}
        zeroMinWidth
        sx={{
          backgroundImage: `url(${signBack})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          padding: '0',
        }}
      >
        <Box
          sx={{
            p: 4,
            background: 'rgba(255, 255, 255, 0.75)',
            borderRadius: '40px',
            height: 'auto',
            maxHeight: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {!isSmallScreen && (
            <>
              <Typography
                component="span"
                variant="h5"
                sx={{ color: '#38A505', display: 'inline', mb: 4 }}
              >
                Smart Farm
              </Typography>
              <Typography variant="h4" sx={{ display: 'inline', mb: 10 }}>
                Enter your contacts
              </Typography>
            </>
          )}
          <TextField
            id="filled-select-community"
            select
            label="Select Community"
            variant="filled"
            color="primary"
            sx={{
              width: '100%',
              mb: 5,
            }}
          >
            {community.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            label="Phone number"
            variant="filled"
            color="primary"
            sx={{ width: '100%', mb: 4 }}
          />

          <Box
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: isSmallScreen ? 'center' : 'flex-center',
            }}
          >
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <SaveButton />
          </div>
          </Box>
        </Box>
      </Grid>
    </ThemeProvider>
  );
};*/



/*import React from 'react';
import {
  ThemeProvider,
  useMediaQuery,
  Box,
  Grid,
  Typography,
  TextField,
  MenuItem,
} from '@mui/material';
import { SaveButton } from '../components/SaveButton';
import { theme } from '../themes/theme';
import signBack from '../assets/static/signBack.png';

const community = [
  {
    value: 'Community1',
    label: 'Community1',
  },
  {
    value: 'Community2',
    label: 'Community2',
  },
];

export const Contact = () => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        xs={12}
        zeroMinWidth
        sx={{
          backgroundImage: `url(${signBack})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          padding: '0',
        }}
      >
        <Box
          sx={{
            p: 4,
            background: 'rgba(255, 255, 255, 0.75)',
            borderRadius: '40px',
            height: 'auto', 
            maxHeight: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {!isSmallScreen && (
            <>
              <Typography
                component="span"
                variant="h5"
                sx={{ color: '#38A505', display: 'inline', mb: 4 }}
              >
                Smart Farm
              </Typography>
              <Typography variant="h4" sx={{ display: 'inline', mb: 10 }}>
                Enter your contacts
              </Typography>
            </>
          )}
          <div style={{ width: '100%' }}>
            <TextField
              id="filled-select-community"
              select
              label="Select Community"
              variant="filled"
              color="primary"
              sx={{
                width: '100%',
                mb: 5,
              }}
            >
              {community.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              label="Phone number"
              variant="filled"
              color="primary"
              sx={{ width: '100%', mb: 4 }}
            />
          </div>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <SaveButton />
          </div>
        </Box>
      </Grid>
    </ThemeProvider>
  );
};*/




/*import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  useMediaQuery,
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from '@mui/material';
import { SaveButton } from '../components/SaveButton';
import signBack from '../assets/static/signBack.png'; // Import your background image


const community = [
  {
    value: 'Community1',
    label: 'Community1',
  },
  {
    value: 'Community2',
    label: 'Community2',
  },
];
export const Contact = () => {
  const isLgScreen = useMediaQuery((theme) => theme.breakpoints.down('lg'));


  const containerStyle = {
    backgroundImage: `url(${signBack})`, // Apply the background image here
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh', // Adjust the height for your needs
        ...containerStyle,
      }}
    >
      {!isLgScreen }
      <Container
        sx={{
          m: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          p: isLgScreen ? 2 : 5, // Adjust padding based on screen size
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontFamily: 'Roboto',
            my: 5,
          }}
        >
          {isLgScreen ? 'Choose' : 'Choose the community'}
        </Typography>
        <FormControl sx={{ mb: 5, width: '100%' }}>
          <InputLabel htmlFor="community-select" sx={{ color: '#1f4700' }}>
            Community
          </InputLabel>
          <Select
            id="community-select"
            value={community}
            sx={{ width: '100%' }}
          >
            {community.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {!isLgScreen && (
          <TextField
            label="Phone number"
            variant="filled"
            color="primary"
            sx={{ width: '100%', mb: 4 }}
          />
        )}
      <SaveButton/>
      </Container>
    </Box>
  );
};*/




/*import React from 'react';
import {
  ThemeProvider,
  useMediaQuery,
  Box,
  Grid,
  Typography,
  TextField,
  MenuItem,
} from '@mui/material';
import { SaveButton } from '../components/SaveButton';
import { theme } from '../themes/theme';
import signBack from '../assets/static/signBack.png';

const community = [
  {
    value: 'Community1',
    label: 'Community1',
  },
  {
    value: 'Community2',
    label: 'Community2',
  },
];

export const Contact = () => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      xs
      zeroMinWidth
      sx={{
        backgroundImage: `url(${signBack})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '0',
      }}
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
              <Typography
                component="span"
                variant="h5"
                sx={{ color: '#38A505', display: 'inline' , mb: 4 }}
              >
                Smart Farm
              </Typography>
              <Typography variant="h4" sx={{ display: 'inline', mb: 10 }}>
                Enter your contacts
              </Typography>
            </>
          )}
          <TextField
            id="filled-select-community"
            select
            label="Select Community"
            variant="filled"
            color="primary"
            sx={{
              width: '100%',
              mb: 5,
            }}
          >
            {community.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            label="Phone number"
            variant="filled"
            color="primary"
            sx={{ width: '100%', mb: 4 }}
          />
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: isSmallScreen ? 'center' : 'flex-center',
            }}
          >
            <SaveButton />
          </Box> 
        </ThemeProvider>
      </Box>
    </Grid>
  );
};*/


/*import React from 'react';

import {ThemeProvider , useMediaQuery, Box, Grid,Typography,TextField,MenuItem} from '@mui/material';
import {SaveButton} from '../components/SaveButton'
import { theme } from '../themes/theme';
import signBack from '../assets/static/signBack.png'

const community = [
  {
    value: 'Community1',
    label: 'Community1',
  },
  {
    value: 'Community2',
    label: 'Community2',
  },
];

export const Contact = () => {
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            xs zeroMinWidth
            sx={{
                backgroundImage: `url(${signBack})`,
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                minHeight: '100vh',
                padding: '0'
            }}
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
                        <Typography component='span' variant='h5' sx={{ color: '#38A505', display: 'inline' }}>
                            Smart Farm
                        </Typography>
                    <Typography variant='h4' sx={{ display: 'inline',mb: 10}}>
                        Enter your contacts
                    </Typography>
                    </>
                    )}
          <TextField
            id="filled-select-community"
            select
            label="Select Community"
            variant="filled"
            color="primary"
            sx={{
              width: '100%',
              mb: 5,
            }}
          >
            {community.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            label="Phone number"
            variant="filled"
            color="primary"
            sx={{ width: '100%', mb: 4 }}
          />
                    <div>
            <SaveButton />
          </div>
                </ThemeProvider>
            </Box>
        </Grid>
    );
};*/





/*import React from 'react';
import signBack from '../assets/static/signBack.png';
import { SignupButton } from '../components/SignupButton';
import { theme } from '../themes/theme';
import { Box, Grid, TextField, Typography, MenuItem, useMediaQuery, ThemeProvider } from '@mui/material';

const community = [
  {
    value: 'Community1',
    label: 'Community1',
  },
  {
    value: 'Community2',
    label: 'Community2',
  },
];

export const Contact = () => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
      <Grid
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
        display: 'flex',
           width: 602,
            height: 672,
            padding: '31px 0px 599px 53px',
            flexDirection: 'column',
            alignItems: 'center',
            flexShrink: 0,
           borderRadius: '40px',
           opacity: 0.75,
           background: '#FFF',
        }}
        >
          <ThemeProvider theme={theme}>
          {!isSmallScreen && ( <>
            <Typography component='span' variant='h6' sx={{ color: '#38A505', mb: 4 }}>
              Smart Farm
            </Typography>
          <Typography variant="h5" sx={{ mb: 2, color: '#000', textAlign: 'center' }}>
            Enter your contacts
          </Typography>
          </>
  )}

          <TextField
            id="filled-select-community"
            select
            label="Select Community"
            variant="filled"
            color="primary"
            sx={{
              width: '100%',
              mb: 2,
            }}
          >
            {community.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            label="Phone number"
            variant="filled"
            color="primary"
            sx={{ width: '100%', mb: 4 }}
          />

          <div>
            <SignupButton />
          </div>
          </ThemeProvider>
        </Box>
      </Grid>
    
  );
};*/



// import React from 'react';
// import signBack from '../assets/static/signBack.png';
// import { SignupButton } from '../components/SignupButton';
// import { theme } from '../themes/theme';
// import { Box, Grid, TextField, Typography, MenuItem, useMediaQuery, ThemeProvider } from '@mui/material';

// const community = [
//   {
//     value: 'Community1',
//     label: 'Community1',
//   },
//   {
//     value: 'Community2',
//     label: 'Community2',
//   },
// ];

// export const Contact = () => {
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // Fix this line
//   return (
//     <Grid
//       sx={{
//         backgroundImage: `url(${signBack})`,
//         backgroundSize: 'contain',
//         backgroundRepeat: 'no-repeat',
//         height: '100%',
//         width: '100%',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundPosition: 'center',
//       }}
//     >
//       <Box
//         sx={{
//           display: 'flex',
//           width: 602,
//           height: 672,
//           padding: '31px 0px 599px 53px',
//           flexDirection: 'column',
//           alignItems: 'center',
//           flexShrink: 0,
//           borderRadius: '40px',
//           opacity: 0.75,
//           background: '#FFF',
//         }}
//       >
//         <ThemeProvider theme={theme}>
//           {!isSmallScreen && (
//             <>
//               <Typography variant='h6' sx={{ mb: 8, textAlign: 'center' }}>
//                 <Typography component='span' variant='h6' sx={{ color: '#38A505', mb: 4 }}>
//                   Smart Farm
//                 </Typography>
//                 <Typography variant='h5' sx={{
//                   width: 332,
//                   height: 25,
//                   color: '#000',
//                   textAlign: 'center',
//                   fontFamily: 'Poppins',
//                   fontSize: 32,
//                   padding: '30px'
//                 }}>
//                   Enter your contacts
//                 </Typography>
//               </Typography>
//             </>
//           )}

//           <TextField
//             id="filled-select-community"
//             select
//             label="Select Community"
//             variant="filled"
//             color="primary"
//             sx={{
//               width: '90%',
//               mb: 5,
//               padding: '8px 8px',
//             }}
//           >
//             {community.map((option) => (
//               <MenuItem key={option.value} value={option.value}>
//                 {option.label}
//               </MenuItem>
//             ))}
//           </TextField>
        
//           <TextField
//             label="Phone number"
//             variant="filled"
//             color="primary"
//             sx={{ width: '90%', mb: 20 }} 
//           />
//           <div>
//             <SignupButton/>
//           </div>
//         </ThemeProvider>
//       </Box>
//     </Grid>
//   );
// };

// import React from 'react';
// import signBack from '../assets/static/signBack.png';
// import { SignupButton } from '../components/SignupButton';
// import {theme} from '../themes/theme'
// import { Box, Grid, TextField, Typography, MenuItem, useMediaQuery,ThemeProvider } from '@mui/material';

// const community = [
//   {
//     value: 'Community1',
//     label: 'Community1',
//   },
//   {
//     value: 'Community2',
//     label: 'Community2',
//   },
// ];

// export const Contact = () => {
//   const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down)
//   return (
//     <Grid
//       sx={{
//         backgroundImage: `url(${signBack})`,
//         backgroundSize: 'contain',
//         backgroundRepeat: 'no-repeat',
//         height: '100%',
//         width: '100%',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundPosition: 'center',
//       }}
//     >
//       <Box
//         sx={{
//           display: 'flex',
//           width: 602,
//           height: 672,
//           padding: '31px 0px 599px 53px',
//           flexDirection: 'column',
//           alignItems: 'center',
//           flexShrink: 0,
//           borderRadius: '40px',
//           opacity: 0.75,
//           background: '#FFF',
//         }}
//       >
//         <ThemeProvider theme={theme}>
//         {!isSmallScreen && (
//           <>
//         <Typography variant='h6' sx={{ mb: 8, textAlign: 'center' }}>
//           <Typography component='span' variant='h6' sx={{ color: '#38A505', mb: 4 }}>
//             Smart Farm
//           </Typography>
//           <Typography variant='h6' sx={{
//             width: 332,
//             height: 25,
//             color: '#000',
//             textAlign: 'center',
//             fontFamily: 'Poppins',
//             fontSize: 32,
//             padding: '30px'
//           }}>
//             Enter your contacts
//           </Typography>
//         </Typography>
//         </>
//         )}

//         <TextField
//           id="filled-select-community"
//           select
//           label="Select Community"
//           variant="filled"
//           color="primary"
//           sx={{
//             width: '90%',
//             mb: 5,
//             padding: '8px 8px',
//           }}
//         >
//           {community.map((option) => (
//             <MenuItem key={option.value} value={option.value}>
//               {option.label}
//             </MenuItem>
//           ))}
//         </TextField>
        
//         <TextField
//           label="Phone number"
//           variant="filled"
//           color="primary"
//           sx={{ width: '90%', mb: 20 }} 
//         />
//           <div>
//             <SignupButton/>
//           </div>
//           </ThemeProvider>
//       </Box>
//     </Grid>
//   );
// };

