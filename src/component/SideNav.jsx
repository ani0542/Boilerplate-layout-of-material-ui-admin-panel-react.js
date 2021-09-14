import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { useStyles } from '../styles/HeaderStyles';
import { Paper, Typography } from '@material-ui/core';

import Routes from '../Routes/Routes';

function SideNav({mobileOpen,handleDrawerToggle,handleDrawerClose}) {

    const classes = useStyles();


    return (
        <>
               <nav className={classes.drawer} aria-label="mailbox folders">
                    <Hidden mdUp implementation="css">
                            <Drawer
                                // container={Paper}
                                variant="temporary"
                                anchor={'left'}
                                open={mobileOpen}
                                onClose={handleDrawerToggle}
                                classes={{
                                paper: classes.drawerPaper,
                                }}
                                ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                                }}
                            >
                                
                                <Routes handleDrawerClose={handleDrawerClose}/>
                            </Drawer>
                    </Hidden>
                    <Hidden smDown implementation="css">
                            <Drawer
                                classes={{
                                paper: classes.drawerPaper,
                                }}
                                variant="permanent"
                                open
                            >
                               <Routes handleDrawerClose={handleDrawerClose}/>
                            </Drawer>
                    </Hidden>
            </nav>
        </>
    )
}

export default SideNav
