import React from 'react';
import {Grid, IconButton, ImageListItem, ImageListItemBar} from "@mui/material";
import {Info} from "@mui/icons-material";

const SingleNews = (props) => {
    console.log('Top Bottom News: ', props)
    const {title, urlToImage, description, url, author} = props.topNews
    return (
        <Grid sm={12} md={3} spacing={2}>
            <ImageListItem>
                <img
                    src={`${urlToImage ? urlToImage : ''}?w=248&fit=crop&auto=format`}
                    srcSet={`${urlToImage ? urlToImage : ''}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={title}
                    loading="lazy"
                />
                <ImageListItemBar
                    title={title}
                    subtitle={author ? author : ''}
                    actionIcon={
                        <IconButton
                            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                            aria-label={`info about ${title}`}
                        >
                            <Info />
                        </IconButton>
                    }
                />
            </ImageListItem>
        </Grid>
    );
};

export default SingleNews;