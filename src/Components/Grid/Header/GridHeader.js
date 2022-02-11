import React from "react"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../../../App.css'

export default function GridHeader(){
    return(
        <>
         <TableRow >
            <TableCell style={{fontWeight:'bold'}}>Commit Date</TableCell>
            <TableCell style={{fontWeight:'bold'}}>Message</TableCell>
            <TableCell style={{fontWeight:'bold'}}>Author</TableCell>
          </TableRow>
        </>
    )
}