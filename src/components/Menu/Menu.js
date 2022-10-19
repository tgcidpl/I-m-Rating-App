import React, { useState } from 'react';
import '../../index.scss';
import { Link } from 'react-router-dom';

//below drawer core was taken from mui, originally designed for 4 directions top left right bottom and .map for creating buttons

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';

export function Menu() {
    const [state, setState] = useState({
        left: false
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: 250 }}
            // role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List className="Menu-list">
                <Link className="Menu-list__link smallTile Menu__button" to="/">Home</Link>
                <Link className="Menu-list__link smallTile Menu__button" to="/create">Create New List</Link>
                <Link className="Menu-list__link smallTile Menu__button" to="/aboutus">About Us</Link>
            </List>
        </Box>
    );

    return (
        <div>
                <React.Fragment>
                    <span className="Menu__button smallTile" onClick={toggleDrawer('left', true)}>Menu</span>
                    <Drawer
                        anchor={'left'}
                        open={state['left']}
                        onClose={toggleDrawer('left', false)}
                    >
                        {list('left')}
                    </Drawer>
                </React.Fragment>
        </div>
    );
}
