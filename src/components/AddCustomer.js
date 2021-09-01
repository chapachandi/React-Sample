import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import "./Main.css"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import SaveIcon from '@material-ui/icons/Save';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import validateInfo from './ValidationInfo';
import data from "./mock-data.json";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
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

export default function AddCustomer({ showModal, setShowModal }) {
   
    const classes = useStyles();
    const [id,setRegExId] = React.useState();
    const [regExName,setRegExName] = React.useState();
    const [regExAddress,setRegExAddress] = React.useState();
    const [regExSalary,setRegExSalary] = React.useState();

    const [errors,setErrors] = React.useState();
   
    const [contexts, setContexts] = React.useState(data);
    const [addFromData, setAddFromData] = React.useState({
        id: '',
        cusName: '',
        cusAddress: '',
        cusSalary: '',
    });

    const handleClose = () => {
        setShowModal(false);
    };

    const handleAddFormChange = (event) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newFormData = { ...addFromData };
        newFormData[fieldName] = fieldValue;

        setAddFromData(newFormData);
    }

    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        const newContext = {
            id: addFromData.id,
            cusName: addFromData.cusName,
            cusAddress: addFromData.cusAddress,
            cusSalary: addFromData.cusSalary,
        };

        const newContexts = [...contexts, newContext];
        setContexts(newContexts);
    };

    const handleTextChange = (event) =>{
        event.preventDefault();

        const {target:{value}} = event;
        setErrors({id:''});
        setRegExId(value);
        let reg = new RegExp(/^(C)[0-9]{1,3}$/).test(value)
        if(!reg){
            setErrors({id:'Invalide Id Code'});
        }


    };





    return (
        <div>
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={showModal}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={showModal}>
                <div className={classes.paper} style={{ width: 680, height: 300, border: "2px solid #ffffff" }}>
                    <h1 id="hedear">Add Customer</h1>
                    <form id="form" noValidate autoComplete="off" onSubmit={handleAddFormSubmit}>
                        <TextField 
                        id="standard-basic" 
                        value={id}
                        name="id" 
                        onChange={handleAddFormChange} 
                        onChange={handleTextChange}
                        required='required' 
                        label="Customer ID"
                        error={Boolean(errors?.id)} 
                        helperText={(errors?.id)}
                        variant="outlined" />
                        <TextField id="standard-basic" name="cusName" onChange={handleAddFormChange} required='required' label="Name" variant="outlined" />
                        <TextField id="standard-basic" name="cusAddress" onChange={handleAddFormChange} required='required' label="Address" variant="outlined" />
                        <TextField id="standard-basic" name="cusSalary" onChange={handleAddFormChange} required='required' label="Salary" variant="outlined" />
                        <div id="btn-cancel">
                            <Button onClick={handleClose} color="secondary" style={{cursor:'pointer'}}>Cancel</Button>
                        </div>
                      
                            <div id="save-btn">
                                
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="small"
                                    type="submit"
                                
                                >
                                    Add
                                </Button>

                            </div>
                        
                    </form>
               </div>
            </Fade>
          </Modal>

        <TableContainer component={Paper}>
        <Table id="item-tbl" className={classes.table} aria-label="customized table">
        <TableHead>
            <TableRow>
            <StyledTableCell id="tbl-header">Customer ID</StyledTableCell>
            <StyledTableCell id="tbl-header" align="left">Name</StyledTableCell>
            <StyledTableCell id="tbl-header" align="left">Address</StyledTableCell>
            <StyledTableCell id="tbl-header" align="left">Salary</StyledTableCell>
            <StyledTableCell id="tbl-header" align="left" style={{ width: 150, }}>Action</StyledTableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {contexts.map((context) => (
            <StyledTableRow key={context.name}>
                <StyledTableCell align="left">{context.id}</StyledTableCell>
                <StyledTableCell align="left">{context.cusName}</StyledTableCell>
                <StyledTableCell align="left">{context.cusAddress}</StyledTableCell>
                <StyledTableCell align="left">{context.cusSalary}</StyledTableCell>
                <StyledTableCell align="left">
                <IconButton aria-label="edit">
                    < EditIcon style={{ color: 'green', cursor: 'pointer' }} />
                </IconButton>
                <IconButton aria-label="delete">
                    <DeleteIcon style={{ color: 'red', cursor: 'pointer' }} />
                </IconButton>
                </StyledTableCell>

            </StyledTableRow>
            ))}
        </TableBody>
        </Table>
        </TableContainer>

        </div>

    )
}
