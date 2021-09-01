import React from 'react'
import NavBar from './NavBar'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import "./Main.css"
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';

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
  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
  
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

export default function Item() {
    const classes = useStyles();
    return (
        <div>
            <NavBar></NavBar>
            <Card class="card">
                <h1 id="hedear">Item Details</h1>
                <form id="form" noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Item Code" variant="outlined" />
                <TextField id="outlined-basic" label="Description" variant="outlined" />
                <TextField id="outlined-basic" label="Quntity" variant="outlined" />
                <TextField id="outlined-basic" label="Price" variant="outlined" />
                <div id="save-btn">
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        className={classes.button}
                        startIcon={<SaveIcon />}
                    >
                        Save
                    </Button>
                </div>
                
                </form>
            </Card>
           <br/>
            <TableContainer component={Paper}>
                <Table id="item-tbl" className={classes.table} aria-label="customized table">
                <TableHead>
                <TableRow>
                    <StyledTableCell id="tbl-header">Item Code</StyledTableCell>
                    <StyledTableCell id="tbl-header" align="left">Description</StyledTableCell>
                    <StyledTableCell id="tbl-header" align="left">Quntity</StyledTableCell>
                    <StyledTableCell id="tbl-header" align="left">Price</StyledTableCell>
                    <StyledTableCell id="tbl-header" align="left" style={{width: 150,}}>Option</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <StyledTableRow key={row.name}>
                    <StyledTableCell align="left">{row.calories}</StyledTableCell>
                    <StyledTableCell align="left">{row.fat}</StyledTableCell>
                    <StyledTableCell align="left">{row.carbs}</StyledTableCell>
                    <StyledTableCell align="left">{row.protein}</StyledTableCell>
                    <StyledTableCell align="left">
                        <IconButton aria-label="edit">
                            < EditIcon style={{color:'green',cursor:'pointer'}}/>
                        </IconButton>
                        <IconButton aria-label="delete">
                                <DeleteIcon style={{color:'red',cursor:'pointer'}}/>
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
