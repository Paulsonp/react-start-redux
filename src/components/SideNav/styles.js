import { makeStyles } from "@material-ui/styles";

const drawerWidth = 240;
const primary = "#536DFE";

export default makeStyles(theme => ({
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    width: drawerWidth
  },
  toolbar: {
    ...theme.mixins.toolbar,
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  link: {
    paddingLeft: theme.spacing(2.6)
  },
  linkIcon: {
    minWidth: 40
  },
  linkIconActive: {
    color: primary
  },
  mobileBackButton: {
    marginTop: theme.spacing(0.5),
    marginLeft: theme.spacing(1),
    [theme.breakpoints.only("sm")]: {
      marginTop: theme.spacing(0.625)
    },
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
}));
