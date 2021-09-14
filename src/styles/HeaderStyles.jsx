
import { makeStyles } from "@material-ui/core";
import { blue, blueGrey } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => {
//   console.log(theme.breakpoints);
  return {
    //common
    navImg: {
      width: "35px",
      height: "35px",
      borderRadius: "50%",
      color: "White",
      backgroundColor: blue["A400"],
    },

    ulAvatar:{
        backgroundColor: blue["A200"],
        color: "White",
    },
    avatar:{
        width: "35px",
        height: "35px",   
    },
    
    //header
    wrapper: {
      width: "100%",
      // minHeight: "100vh",
      // height: "auto",
      height:"100vh",
      background: "#efefef",
      boxSizing: "border-box",
      // padding: "70px 24px 24px 270px",
      // [theme.breakpoints.down("sm")]: {
      //   padding: "70px 24px 24px 24px",
      // },
      position:"fixed",
      [theme.breakpoints.down("sm")]: {
        padding: "70px 24px 24px 24px",
      },
      padding:theme.spacing(2,2,0,32)
    },

    logo: {
      lineHeight: "47px",
      color: "inherit",
    },

    // navbar styles

    toolbar: {
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "space-between",
    },
    brandBox: {
      display: "flex",
      flexFlow: "row wrap",
    },
    dropdownlist: {
      maxWidth: "250px",
    },
    listItem: {
      textTransform: "capitalize",
    },

    //sidenav
    drawerPaper: {
      width: "250px",
      marginTop: "64px",
      [theme.breakpoints.down("sm")]: {
        marginTop: "0px",
      },
    },

    navlink: {
      color: blueGrey[700],
      transition: "0.8s",
      "&:hover  div": {
        color: blue["A400"],
      },
    },
    navButton: { width: "100%", textTransform: "capitalize" },
    selectedNav: {
      // display: "flex",
      // flexFlow:"row reverse",
      // flexFlow: "row wrap",
      // justifyContent: "space-between",
      color: `${blue[800]} !important`,
      fontWeight: " bolder",
      " & div": {
        color: `${blue[800]} !important`,
      },
    },
  };
});
