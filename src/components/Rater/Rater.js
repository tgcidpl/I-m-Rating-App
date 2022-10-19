import React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

export function Rater(props) {
    return (
        <Box>
            <Rating name="customized-10" defaultValue={props.defaultValue} max={10} />
        </Box>
    );
}


//CURRENTLY NOT IN USE