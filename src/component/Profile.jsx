import React from 'react'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import {
    Avatar,
    Badge,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    
  } from "@material-ui/core";
  import image from "../assets/unnamed.jpg";
  import NotificationsIcon from '@material-ui/icons/Notifications';
  import { makeStyles } from '@material-ui/core/styles';
  import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useStyles } from "../styles/HeaderStyles";

function Profile() {

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const dropDownData = [
        { label: "setting", icon: <SettingsIcon /> },
        { label: "logout", icon: <ExitToAppIcon /> },
      ];



    return (
        <>
            <Box>
                               
                                 <Button
                                        aria-controls='profile'
                                        aria-haspopup='true'
                                        onClick={handleClick}
                                        color='inherit'
                                         startIcon={<Avatar src={image} className={classes.avatar}></Avatar>}
                                        >
                                       
                                        
                                 </Button>
                               
                               
                                <Menu
                                        id='profile'
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                        placement='bottom-start'>
                                        <List dense={true} className={classes.dropdownlist}>
                                        {dropDownData.map((item, i) => (
                                            <ListItem
                                                key={i}
                                                component={Button}
                                                onClick={handleClose}
                                                className={classes.listItem}
                                               >
                                                <ListItemAvatar>{item.icon}</ListItemAvatar>
                                                <ListItemText primary={item.label}></ListItemText>
                                            </ListItem>
                                        ))}
                                        </List>
                                 </Menu>
                        </Box> 
        </>
    )
}

export default Profile
