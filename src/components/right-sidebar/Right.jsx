import {Grid} from "@mui/material";
import Author from "../author/Author";
import LinkItems from "./LinkItems";
import './Right.css'
import SocialItems from "./SocialItems";

const Right = () => {
    return (
        <Grid item xs={12} md={3} className='right-sidebar'>
            <Author></Author>
            <LinkItems></LinkItems>
            <SocialItems></SocialItems>
        </Grid>
    );
};

export default Right;