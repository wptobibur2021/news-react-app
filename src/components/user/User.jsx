import React from 'react';
import './User.css';
import {Avatar, Divider, ListItem, ListItemAvatar, ListItemText, Typography} from "@mui/material";
const User = (props) => {
    console.log('Single User: ', props)
    const {name, picture, dob, registered, location} = props.singleUser
    const {lenght} = props
    const {index} = props
    console.log('Length: ', lenght)
    console.log('Index: ', index)

    return (
        <div className='single-user'>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt={name.first} src={picture.thumbnail} />
                </ListItemAvatar>
                <ListItemText
                    primary= {
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                className='text-color'
                            >
                            {name.title} {name.first} {name.last}
                        </Typography>
                    </React.Fragment>
                    }
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Dob: {dob.age} Years
                                <br></br>
                                Join Us: {registered.age} Years
                                <br></br>
                            </Typography>
                            {location.city}, {location.state}, {location.country}.
                        </React.Fragment>
                    }
                />
            </ListItem>
            {
                index < (lenght-1)   ? <Divider variant="inset" component="li" /> : ''
            }

        </div>
    );
};

export default User;