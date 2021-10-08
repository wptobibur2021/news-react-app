import React from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {FacebookShareButton, FacebookIcon, InstapaperShareButton, InstapaperIcon, TwitterShareButton, TwitterIcon} from "react-share";

const Popular = (props) => {
    console.log('Props:', props)
    const shareUrl = 'https://www.npmjs.com/package/react-share'
    const {title, urlToImage, url, description} = props.popularPost
    return (
        <Card sx={{ maxWidth: 345 }} className='popular-post'>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={urlToImage}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title.slice(0, 20)}.....
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    { description ? description.slice(0, 50) : '' }
                </Typography>
            </CardContent>
            <CardActions>
                <Button target="_blank" size="small" href={url}>More...</Button>
                <FacebookShareButton url={url} quote={title} hashtag={description}>
                    <FacebookIcon size={25} round={true}></FacebookIcon>
                </FacebookShareButton>
                <InstapaperShareButton url={url} title={title} description={description}>
                    <InstapaperIcon size={25} round={true} />
                </InstapaperShareButton>
                <TwitterShareButton url={url} title={title} via={description}>
                    <TwitterIcon size={25} round={true}/>
                </TwitterShareButton>
            </CardActions>

        </Card>
    );
};

export default Popular;