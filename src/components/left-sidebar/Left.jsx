import React, {useEffect, useState} from 'react';
import './Left.css'
import {Grid, Button, Card, CardMedia, Typography, CardActions, CardContent, List} from "@mui/material";
import {Facebook, LinkedIn, YouTube} from "@mui/icons-material";
import Popular from "../popular/Popular";

const Left = () => {
    const [populars, setPopulars] = useState([])
    useEffect(()=>{
        fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=16efed8bfff342aa958d794e8feecc46')
            .then(res=>res.json())
            .then(data => setPopulars(data.articles))
    },[])

    return (
        <Grid item xs={12} md={3} className="left-sidebar">
            <Typography variant="h6" component="div" className='sidebar-heading'>
                Our Popular Posts
            </Typography>
            {
                populars.map((popular, i) => <Popular key={i} popularPost={popular}></Popular>)
            }
        </Grid>
    );
};

export default Left;