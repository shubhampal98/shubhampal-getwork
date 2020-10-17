import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import SchoolIcon from '@material-ui/icons/School';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import CancelIcon from '@material-ui/icons/Cancel';
import PersonIcon from '@material-ui/icons/Person';
import LoopIcon from '@material-ui/icons/Loop';
import BusinessIcon from '@material-ui/icons/Business';
import SendIcon from '@material-ui/icons/Send';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import CreateIcon from '@material-ui/icons/Create';
import YouTubeIcon from '@material-ui/icons/YouTube';
import UpdateIcon from '@material-ui/icons/Update';
import Main from './Main';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    paddingTop: '-50px',
    width: drawerWidth,
    background: '#2f3640',
    color: '#dcdde1'
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function PermanentDrawerLeft() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar> */}
      {/* <Navbar /> */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        {/* <Divider /> */}
        <List>
          <ListItem>
            <ListItemIcon style={{color: '#dcdde1'}}><DashboardIcon/></ListItemIcon>
            <ListItemText primary={'Dashboard'} />
          </ListItem>
          <ListItem>
            <ListItemIcon style={{color: '#dcdde1'}}><AccountBalanceIcon /></ListItemIcon>
            <ListItemText primary={'Branch/Courses'} />
          </ListItem>
        </List>
        <List>
          <ListItem>
            <ListItemText primary={'Colleges'} />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon style={{color: '#dcdde1'}}><AllInboxIcon /></ListItemIcon>
            <ListItemText primary="All" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon style={{color: '#dcdde1'}}><SendIcon /></ListItemIcon>
            <ListItemText primary="Send Invitation" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon style={{color: '#dcdde1'}}><SchoolIcon /></ListItemIcon>
            <ListItemText primary="Add College" />
          </ListItem>
        </List>

        <List>
          <ListItem>
            <ListItemText primary={'Companies'} />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon style={{color: '#dcdde1'}}><BusinessIcon /></ListItemIcon>
            <ListItemText primary="All" />
          </ListItem>
        </List>

        <List>
          <ListItem>
            <ListItemText primary={'Students'} />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon style={{color: '#dcdde1'}}><PersonIcon /></ListItemIcon>
            <ListItemText primary="All" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon style={{color: '#dcdde1'}}><PersonAddIcon /></ListItemIcon>
            <ListItemText primary="Add Student" />
          </ListItem>
        </List>

        <List>
          <ListItem>
            <ListItemText primary={'My Jobs'} />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon style={{color: '#dcdde1'}}><AllInboxIcon /></ListItemIcon>
            <ListItemText primary="All Jobs" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon style={{color: '#dcdde1'}}><SendIcon /></ListItemIcon>
            <ListItemText primary="Open Jobs" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon style={{color: '#dcdde1'}}><LoopIcon /></ListItemIcon>
            <ListItemText primary="Application Status" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon style={{color: '#dcdde1'}}><CancelIcon /></ListItemIcon>
            <ListItemText primary="Closed Jobs" />
          </ListItem>
        </List>

        <List>
          <ListItem>
            <ListItemText primary={'Data'} />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon style={{color: '#dcdde1'}}><CreateIcon /></ListItemIcon>
            <ListItemText primary="Generate Passport" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon style={{color: '#dcdde1'}}><YouTubeIcon /></ListItemIcon>
            <ListItemText primary="Update Youtube Links" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon style={{color: '#dcdde1'}}><UpdateIcon /></ListItemIcon>
            <ListItemText primary="Update Blog Links" />
          </ListItem>
        </List>

        {/* <Divider /> */}

        {/* <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}

      </Drawer>
      <Main />
    </div>
  );
}
