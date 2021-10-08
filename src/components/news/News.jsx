import React, {useState} from 'react';
import './Nesw.css'
import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Grid,
    IconButton,
    Typography,
    Dialog
} from "@mui/material";
import {red} from "@mui/material/colors";
import {Favorite, MoreVert, Share, ArrowForward} from "@mui/icons-material";
import {
    FacebookIcon,
    FacebookShareButton,
    InstapaperIcon,
    InstapaperShareButton, TwitterIcon,
    TwitterShareButton,
    LinkedinShareButton,
    LinkedinIcon,
    WhatsappShareButton,
    WhatsappIcon
} from "react-share";


const News = (props) => {
    console.log(props)
    const {author, content, description, title, urlToImage, publishedAt, url} = props.post
    const [open, setOpen] = useState(false)
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Grid xs={12} md={12}>
            <Card>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            <img className='authorImg' src='https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVert />
                        </IconButton>
                    }
                    title={title}
                    subheader={publishedAt.slice(0, 10)}
                />
                <CardMedia
                    component="img"
                    height="350"
                    image={urlToImage}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {description.slice(0, 320)} <a target='_blank' href={url}>more...</a>
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <Favorite />
                    </IconButton>
                    <IconButton onClick={handleClickOpen} aria-label="share">
                        <Share />
                    </IconButton>
                    <Dialog onClose={handleClose} open={open} className='social-share-dialog'>
                        <div className="social-medial" >
                            <FacebookShareButton className="social-button" url={url} quote={title} hashtag={description}>
                                <FacebookIcon size={50} round={true}></FacebookIcon>
                            </FacebookShareButton>
                            <InstapaperShareButton className="social-button"  url={url} title={title} description={description}>
                                <InstapaperIcon size={50} round={true} />
                            </InstapaperShareButton>
                            <TwitterShareButton className="social-button"  url={url} title={title} via={description}>
                                <TwitterIcon size={50} round={true}/>
                            </TwitterShareButton>
                            <LinkedinShareButton className="social-button"  url={url} title={title} summary={description}>
                                <LinkedinIcon size={50} round={true}/>
                            </LinkedinShareButton>
                            <WhatsappShareButton className="social-button"  url={url} title={title}>
                                <WhatsappIcon size={50} round={true}/>
                            </WhatsappShareButton>
                        </div>
                    </Dialog>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default News;