import React from 'react';
import {Box, Container, Grid} from "@mui/material";
import Navbar from "./Navbar";
import './Header.css'
const Header = () => {
    return (
        <header className='header-section'>
            <Box>
                <Grid md={12} spacing={4}>
                    <Container>
                        <Grid container md={12}>
                            <Grid sm={12} md={3}>
                                <h1>logo</h1>
                            </Grid>
                            <Grid sm={12} md={9}>
                                <Navbar></Navbar>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
            </Box>
        </header>
    );
};

export default Header;