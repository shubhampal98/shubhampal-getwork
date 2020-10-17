import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import Gridtable from '../Gridtable';


const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  section1: {
    display: 'flex',
  }
}))

const Main = () => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
        <div className={classes.toolbar} />
        <div className="section1">
          <h1 style={{display: 'inline', marginRight: '10rem', marginLeft: '10rem'}}>This job is for testing purpose @ Company Test Account</h1>
          <Button variant="contained" color="secondary">Close Job</Button>
        </div>
        <div style={{marginTop: '3rem'}}>
          {/* <h1>Table</h1> */}
          <Gridtable />
        </div>
      </main>
  )
}

export default Main
