import React, { useState, useEffect } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import Title from './Title';
import firebase from '../firebase'

// Generate Order Data
function createData(id, email, password) {
  return { id, email, password };
}



function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const [users, setUsers] = React.useState([])
  const classes = useStyles();



  React.useEffect(() => {
    
      const db = firebase.firestore();
     return db.collection('users').onSnapshot((snapshot)=>{
        const usersData = []
        snapshot.forEach(doc => usersData.push(({...doc.data(), id: doc.id})))
        setUsers(usersData)
      });
     

     
   
  }, [])


  const onDelete = (user) => {
    const db = firebase.firestore()
    db.collection('users').doc(user.id).delete()
                       }

  return (
    <React.Fragment>
      <Title>Users</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Fullname</TableCell>
            <TableCell>Display Name</TableCell>
            <TableCell>Profile Photo</TableCell>

            {/* <TableCell align="right">Sale Amount</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
   
              <TableRow key={user.id}>
              <TableCell>{user.uid}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.displayName}</TableCell>
              <TableCell>{user.photoUrl}</TableCell>
              
              <TableCell align="right"><DeleteIcon onClick={()=>onDelete(user)} /></TableCell>

              {/* <TableCell align="right">{user.amount}</TableCell> */}
            </TableRow>
            
           
          ) )}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>

        </Link>
      </div>
    </React.Fragment>
  );

  
}