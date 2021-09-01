import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import "./Main.css"
import Button from '@material-ui/core/Button';
import NavBar from './NavBar';
import AddCustomer from './AddCustomer';




const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },

}));



export default function Customer() {
  const classes = useStyles();
  const [showModal, setShowModal] = React.useState(false);

  function modal() {
    setShowModal((prev) => !prev);
  }
  
  
  return (

    <div className={classes.root}>
     
      <NavBar />

      <div id="btn-add-customer">
        <Button variant="contained" color="primary" type="button" onClick={modal}>
          +Add Customer
        </Button>

      </div>
      <AddCustomer showModal={showModal} setShowModal={setShowModal} />

    </div>

  );
}