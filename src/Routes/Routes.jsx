import { List } from '@material-ui/core'
import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import DashboardIcon from "@material-ui/icons/Dashboard";
import BookIcon from "@material-ui/icons/Book";
import PostAddIcon from "@material-ui/icons/PostAdd";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { NavLink } from "react-router-dom";
import { useStyles } from '../styles/HeaderStyles';
import Button from '@material-ui/core/Button';

function Routes({handleDrawerClose}) {
    const classes = useStyles();

    const listItemData = [
        { label: "Dashboard", link: "/", icon: <DashboardIcon /> },
        { label: "Blog Post", link: "/blog", icon: <BookIcon /> },
        { label: "Link 1", link: "/link1", icon: <PostAddIcon /> },
        {
          label: "Notification",
          link: "/notification",
          icon: <NotificationsActiveIcon />,
        },
        { label: "logout", link: "/logout", icon: <ExitToAppIcon /> },
      ];


    return (
        <>
                <List>
                   {
                     listItemData.map((item,index)=>{
                     return (
                         <>
                           
                                <Button
                                    size="small"
                                    onClick={() => handleDrawerClose()}
                                    className={classes.navButton}
                                >
                                    <ListItem 
                                        exact
                                        key={index}  
                                        component={NavLink}
                                        to={item.link}
                                        className={classes.navlink}
                                        activeClassName={classes.selectedNav}
                                    >
                                               <ListItemIcon>
                                                           {item.icon}
                                               </ListItemIcon>
                                               <ListItemText>
                                                                 {item.label}
                                                </ListItemText>
                                    </ListItem>

                                </Button>
                         </>
                       )
                 })
             }
             </List>
        </>
    )
}

export default Routes
