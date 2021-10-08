import React, {useEffect, useState} from 'react';
import {Grid} from "@mui/material";
import SingleNews from './SingleNews'

const FooterTop = () => {
    const [topNews, setTopNews] = useState([])
    useEffect(() =>{
        fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=16efed8bfff342aa958d794e8feecc46')
            .then(res => res.json())
            .then(data => setTopNews(data.articles))
    },[])
    return (
        <>
            <Grid container>
                {
                    topNews.map((top, i) => <SingleNews key={i} topNews={top}></SingleNews>)
                }
            </Grid>
        </>
    );
}

export default FooterTop;