import React from 'react';
import { Button, useRedirect } from 'react-admin';
// import { Link } from 'react-router-dom';


export const SaveButton = () => {
    const redirect = useRedirect();
    const handleClick = () => {
        redirect('/Dashboard');
    }
    return (
        // <Link to="/signup" style={{ textDecoration: 'none', color: 'white' }}>
        <Button variant="contained" sx={{
            width: '100px',
            height: '50px',
            background: '#1F4700'
          }}  onClick={handleClick}>
            Save
        </Button>
        // </Link>
    );
};