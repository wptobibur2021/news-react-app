import React from 'react';
import {Grid, Link, ListItemButton, ListItemIcon, ListItemText, Typography} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const LinkItems = () => {
    return (
        <>
            <Typography variant="h6" component="div" className='sidebar-heading' >
                Online News Paper
            </Typography>
            <Link href='https://www.usatoday.com/' target='_blank' underline="none" color="inherit">
                <ListItemButton>
                    <ListItemIcon>
                        <ArrowForwardIosIcon />
                    </ListItemIcon>
                    <ListItemText primary="USA Today" />
                </ListItemButton>
            </Link>
            <Link href='https://www.theguardian.com/international' target='_blank' underline="none" color="inherit">
                <ListItemButton>
                    <ListItemIcon>
                        <ArrowForwardIosIcon />
                    </ListItemIcon>
                    <ListItemText primary="The Guardian" />
                </ListItemButton>
            </Link>
            <Link href='https://www.nytimes.com/' target='_blank' underline="none" color="inherit">
                <ListItemButton>
                    <ListItemIcon>
                        <ArrowForwardIosIcon />
                    </ListItemIcon>
                    <ListItemText primary="The New York Times" />
                </ListItemButton>
            </Link>
            <Link href='https://www.dailymail.co.uk/home/index.html' target='_blank' underline="none" color="inherit">
                <ListItemButton>
                    <ListItemIcon>
                        <ArrowForwardIosIcon />
                    </ListItemIcon>
                    <ListItemText primary="Daily Mail" />
                </ListItemButton>
            </Link>
            <Link href='https://www.wsj.com/' target='_blank' underline="none" color="inherit">
                <ListItemButton>
                    <ListItemIcon>
                        <ArrowForwardIosIcon />
                    </ListItemIcon>
                    <ListItemText primary="The Wall Street Journal" />
                </ListItemButton>
            </Link>

            <Link href='https://www.thedailystar.net/' target='_blank' underline="none" color="inherit">
                <ListItemButton>
                    <ListItemIcon>
                        <ArrowForwardIosIcon />
                    </ListItemIcon>
                    <ListItemText primary="The Daily Star" />
                </ListItemButton>
            </Link>
        </>
    );
};

export default LinkItems;