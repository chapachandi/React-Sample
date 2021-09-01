import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import "./Main.css"
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';

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

export default function NavBar() {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="static" style={{backgroundColor:"#035397"}}>
                <Toolbar>
                <h3 style={{marginLeft:"30px"}}>SP</h3>
                <Typography variant="h7" className={classes.title}>
                
                <ul id="navdetails">
                    <Link style={{color: 'rgb(215 220 220)',textDecoration: 'none'}} to='/'>
                      <li>Home</li>
                    </Link>
                    <Link style={{color: 'rgb(215 220 220)',textDecoration: 'none'}} to='/customer'>
                      <li>Customer</li>
                    </Link>
                    <Link style={{color: 'rgb(215 220 220)',textDecoration: 'none'}} to='/item'>
                      <li>Item</li>
                    </Link>
                    <Link style={{color: 'rgb(215 220 220)',textDecoration: 'none'}} to='/order'>
                      <li>Order</li>
                    </Link>
              
                </ul>
                </Typography>
                <Typography variant="h7" >
                    <ul id="log">
                        <Link style={{color: 'rgb(215 220 220)',textDecoration: 'none'}} to='/signup'>
                          <li>Sign Up</li>
                        </Link>
                        <Link style={{color: 'rgb(215 220 220)',textDecoration: 'none'}} to='/login'>
                          <li>Login</li>
                        </Link>
                        
                    </ul>
                </Typography>
                
                </Toolbar>
            </AppBar>
        </div>
    )
}
