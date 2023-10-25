import React, { useState } from 'react';
import {
  Container,
  TextField,
  Typography,
  Box,
  Grid,
  useMediaQuery,
  Button,
} from '@mui/material';
import { CustomCancelButton } from '../components/CancelButton';
import { useTheme } from '@mui/material/styles';
//import { Link } from 'react-router-dom';
export const UserForm = () => {
  const theme = useTheme();
 // const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const initialFormData = {
    name: '',
    surname: '',
    phone: '',
    email: '',
    education: '',
  };
  const [formData, setFormData] = useState(initialFormData);
  const handleReset = () => {
    setFormData(initialFormData);
  };
  const handleSubmit = () => {
    fetch('/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('User data saved:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} >
          <Box p={2}>
            <Typography variant="h4" gutterBottom>
              New Data
            </Typography>
            <TextField
              variant="filled"
              label="Name"
              color="primary"
              fullWidth
              margin="normal"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <TextField
              variant="filled"
              label="Surname"
              color="primary"
              fullWidth
              margin="normal"
              onChange={(e) => setFormData({ ...formData, surname: e.target.value })}
            />
            <TextField
              variant="filled"
              label="Phone"
              color="primary"
              fullWidth
              margin="normal"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
            <TextField
              variant="filled"
              label="Email"
              color="primary"
              fullWidth
              margin="normal"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <TextField
              variant="filled"
              label="Education"
              color="primary"
              fullWidth
              margin="normal"
              value={formData.education}
              onChange={(e) => setFormData({ ...formData, education: e.target.value })}
            />

            <Box display="flex" justifyContent="flex-end" mt={3}>
              <Button onClick={handleSubmit}>Save</Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

