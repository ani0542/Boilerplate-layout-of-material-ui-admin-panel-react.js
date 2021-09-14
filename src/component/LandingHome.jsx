import React from 'react'
import { Route, Switch } from "react-router-dom";
import { Box } from "@material-ui/core";
import { useStyles } from '../styles/HeaderStyles';
import Navbar from './Navbar'
import SideNav from './SideNav'
import Dashboard from '../pages/Dashboard';
import Notification from "../pages/Notification"
import Link1 from "../pages/Link1"
import BlogPost from "../pages/BlogPost"

function LandingHome() {

    const classes = useStyles();

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };


    const handleDrawerClose = () => {
        setMobileOpen(false);
        // console.log("prem se bolo Jai siya ram");
      };


    return (
        <>
            <Navbar  handleDrawerToggle={handleDrawerToggle}/>
            <SideNav
                    mobileOpen={mobileOpen}
                    handleDrawerClose={handleDrawerClose}
                    handleDrawerToggle={handleDrawerToggle}
            />
            <Box className={classes.wrapper}>
                        <Switch>
                                <Route exact path="/" render={() => <Dashboard />} />
                                <Route exact path="/blog" render={() => < BlogPost/>} />
                                <Route exact path="/link1" render={() => <Link1 />} />
                                <Route exact path="/notification" render={() => <Notification />} />
                        </Switch>
             </Box>
        </>
    )
}

export default LandingHome
