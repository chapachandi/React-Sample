import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import "./Main.css"
import { Box } from '@material-ui/core';
import { Image } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  
   
  }));

export default function Home() {
    const classes = useStyles();

    return (
        <div>
          <NavBar></NavBar>
            <Box id="image"></Box>
            <div><h1 id="page-hedear">Shopping Center</h1></div>
            <p id="page-pr">Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.</p>
      
        </div>
    )
}
