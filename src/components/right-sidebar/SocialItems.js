import React from 'react';
import {ListItemButton, ListItemIcon, ListItemText, Typography} from "@mui/material";
import {LinkedIn, YouTube} from "@mui/icons-material";

const SocialItems = () => {
    return (
        <>
            <Typography variant="h6" component="div" className='sidebar-heading' >
                Social Media
            </Typography>
            <ListItemButton>
                <ListItemIcon>
                    <LinkedIn />
                </ListItemIcon>
                <ListItemText primary="LinkedIn" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <YouTube />
                </ListItemIcon>
                <ListItemText primary="YouTube" />
            </ListItemButton>
        </>
    );
};

export default SocialItems;