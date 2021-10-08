import React from 'react';
import {Box, Container, Grid, Typography, Card, CardActionArea, CardMedia, CardContent} from "@mui/material";

const TopNews = () => {
    return (
        <div className='top-news'>
            <Box>
                <Container>
                    <Grid sm={12} md={8}>
                        <Typography>

                        </Typography>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="/static/images/cards/contemplative-reptile.jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid sm={12} md={4}>
                        <h1>Hello</h1>
                    </Grid>
                </Container>
            </Box>
        </div>
    );
};

export default TopNews;