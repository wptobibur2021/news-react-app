import React, {useEffect, useState} from "react";
import './Feed.css'
import {
    Avatar,
    Card,
    Box,
    Grid,
    CircularProgress,
    Container,
    IconButton, CardMedia, CardContent, Typography, CardActions} from "@mui/material";
import { red } from '@mui/material/colors';
import {MoreVert, Favorite, Share} from "@mui/icons-material";

import Left from "../left-sidebar/Left";
import Right from "../right-sidebar/Right";
import News from "../news/News";


const Feed = () => {
    const [allNews, setNews] = useState([])
    useEffect(() =>{
        fetch('https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&apiKey=16efed8bfff342aa958d794e8feecc46')
            .then(res => res.json())
            .then(data => setNews(data.articles))
        console.log('News Api: ', allNews)
    }, [])

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Grid container spacing={3}>
                <Left></Left>
                <Grid item xs={12} md={6} spacing={2} className='news-feed'>
                    {
                        allNews.length === 0 ? <CircularProgress className="waiting-spiner" /> :
                        <Box>
                            <Grid container>
                                {
                                    allNews.map((news, i) => <News key={i} post={news}></News>)
                                }
                            </Grid>
                        </Box>
                    }
                </Grid>
                <Right></Right>
                </Grid>
            </Container>
        </Box>
    );
};

export default Feed;