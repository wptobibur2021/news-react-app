import {useEffect, useState} from 'react';
import User from "../user/User";
import {List, Typography, CircularProgress} from "@mui/material";
export default function Author() {
    const [users, setUsers] = useState([])
    useEffect(()=>{
        fetch('https://randomuser.me/api/?results=5')
            .then(res => res.json())
            .then(data => setUsers(data.results))
        console.log('Users: ', users)
    },[])
   const length = users.length
    return (
    

            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <Typography variant="h6" component="div" className='sidebar-heading'>
                    Our All Author
                </Typography>
                {
                    users.map((user, i) => <User key={i} index={i} singleUser={user} lenght={length}></User>)
                }
            </List>
    )
}
