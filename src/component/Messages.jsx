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
//   import image from "../../../assets/unnamed.jpg";
  import NotificationsIcon from '@material-ui/icons/Notifications';

  import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ForumIcon from "@material-ui/icons/Forum";
import { useStyles } from "../styles/HeaderStyles";

function Messages() {

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const dropDownData = [
        { label: "GreatCoders", description: "commodi dicta ..." },
        { label: "Bholenath", description: "ipsum dolor sit ..." },
        { label: "Mahakaal", description: "llum porro saepe ..." },
      ];



    return (
        <>
                     <Box>
                              
                                  <IconButton
                                        aria-controls='messages'
                                        aria-haspopup='true'
                                        onClick={handleClick}
                                        color='inherit'
                                         
                                        >
                                        <Badge badgeContent={4} color='secondary'>
                                             
                                                <ForumIcon />
                                        </Badge>
                                        
                                 </IconButton>
                               
                               
                               

                                   <Menu
                                        id="messages"
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

export default Messages
