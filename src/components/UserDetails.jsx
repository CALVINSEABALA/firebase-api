import React, {useState,useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import constants from './data';
import firebase from './firebase';
import '@firebase/firestore';
import {
    makeStyles,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Avatar,
    Grid,
    Typography,
    TablePagination,
} from '@material-ui/core';
import TableFooter from "@material-ui/core/TableFooter";


const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
    },
    tableContainer: {
        borderRadius:15,
        margin: '25px 10px',
    },
    tableHeaderCell: {
        fontWeight: 'bold',
        backgroundColor: theme.palette.secondary.main,
        color:theme.palette.getContrastText(theme.palette.primary.dark)
    },
    name: {
        fontWeight: 'bold',
        color: 'grey ',
    },
    age: {
        fontWeight:'bold',

    },
}));


const UserDetails = () => {
    const classes = useStyles();
    const db = firebase.firestore();
    const [UsersData,setData] = useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const history = useHistory();
    const ConfirmAge = (age) => {


        if (age > 18){

            return age;
        }
        else{

            return age;
        }

    }
    UsersData.sort((a,b) => parseInt(a.age) - parseInt(b.age));
    const  Add = () =>{
       history.push('/AddUser')
    };
    const Update = () => {
      history.push('/UpdateDetails')
    };
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
useEffect(() => {
    var info = []
    db.collection('users').get()
        .then((users) => {
            users.forEach(user => {

                info.push(user.data())
            })
            setData(info)

        })
        .catch((error) => console.log(error))

},[])
    return (
        <div className={'container'}>
            <TableContainer component={Paper} className={classes.tableContainer}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.tableHeaderCell}>Name</TableCell>
                            <TableCell className={classes.tableHeaderCell}>Surname</TableCell>
                            <TableCell align="right" className={classes.tableHeaderCell}>Age</TableCell>
                            <TableCell align="right" className={classes.tableHeaderCell}>Location</TableCell>
                            <TableCell align="right" className={classes.tableHeaderCell}>Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {constants.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                            <TableRow key={row.id} >
                                <TableCell component="th" scope="row">
                                    <Grid container>
                                        <Grid item lg={3}>
                                            <Avatar alt={row.name} src={'./'}/></Grid>
                                        <Grid item lg={9}> <NavLink to={{pathname:'/UpdateDetails',
                                            user:{...row}}} className={'Navlink'}> <Typography className={classes.name}>
                                            {row.name}</Typography>
                                           </NavLink>
                                        </Grid>
                                    </Grid>
                                </TableCell>
                                <TableCell><Typography className={classes.name}>{row.surname}</Typography></TableCell>
                                <TableCell align="right"><Typography className={classes.age}>{row.age}</Typography></TableCell>
                                <TableCell align="right"><Typography>{row.location}</Typography></TableCell>
                                <TableCell align="right"><Typography>{row.email}</Typography></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TablePagination
                            rowsPerPageOptions={[3,5,10,15]}
                            component="div"
                            count={constants.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </TableFooter>
                </Table>
            </TableContainer>
            <div>
                <button className="btn btn-danger" type="button"  onClick={Add}>
                    Add User
                </button>

            </div>

        </div>

    );

}
export default UserDetails;


