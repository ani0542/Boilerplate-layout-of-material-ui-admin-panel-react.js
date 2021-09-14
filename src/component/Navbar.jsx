import React from 'react'
// import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
import Box from '@material-ui/core/Box';
// import Profile from './NavTabs/Profile';
// import Notification from "./NavTabs/Notification"
import { useStyles } from "../styles/HeaderStyles";
// import Messages from './NavTabs/Messages';
// import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import Notification from './Notification';
import Profile from './Profile';
import Messages from "./Messages"

function Navbar({handleDrawerToggle}) {

    const classes = useStyles();


    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClicks = ()=>{
        // alert("123")
        handleDrawerToggle()
    }



    return (
        <>
               <AppBar position="static" >
                    <Toolbar className={classes.toolbar}>
                        <Typography variant="h6" className={classes.title}>
                               Animesh Panel
                        </Typography>
                       
                       <Hidden smDown>
                                <Box style={{ display: "flex" }}>
                                    <Notification/>
                                    <Messages/>
                                    <Profile/>
                                </Box>
                        </Hidden>

                        <Hidden mdUp>
                            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleClicks}>
                                <MenuIcon />
                            </IconButton>
                        </Hidden>

                    </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
