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




function Notification() {
    const classes = useStyles();


    const dropDownData = [
        { label: "Alex", description: "likes your post ..." },
        { label: "Breza", description: "connented on your feeds ..." },
        { label: "Kayes", description: "connented on your feeds ..." },
      ];


      const [anchorEl, setAnchorEl] = React.useState(null);

      const handleClick = (event) => {
          setAnchorEl(event.currentTarget);
      };
  
      const handleClose = () => {
          setAnchorEl(null);
      };

    return (
        <>
                         <Box>
                                
                                 <IconButton
                                        aria-controls='notifications'
                                        aria-haspopup='true'
                                        onClick={handleClick}
                                        color='inherit'
                                         
                                        >
                                        <Badge badgeContent={4} color='secondary'>
                                             
                                              <NotificationsIcon/>
                                        </Badge>
                                        
                                 </IconButton>
                               
                               
                                 <Menu
                                        id="notification"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                        placement="bottom-start"
                                    >
                                        <List dense={true} className={classes.dropdownlist} >
                                                {dropDownData.map((item, i) => (
                                                    <ListItem
                                                    key={i}
                                                    component={Button}
                                                    onClick={handleClose}
                                                    className={classes.listItem}
                                                    >
                                                    <ListItemAvatar>
                                                        <Avatar className={classes.ulAvatar}>{item.label[0]}</Avatar>
                                                    </ListItemAvatar>
                                                    <ListItemText
                                                        primary={item.label}
                                                        secondary={item.description}
                                                    ></ListItemText>
                                                    </ListItem>
                                                ))}
                                        </List>
                             </Menu>
                        </Box>
        </>
    )
}

export default Notification
