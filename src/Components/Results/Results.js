import react, { useEffect, useState, useContext } from "react"
import GridIntro from '../Grid/GridIntro'
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import GridHeader from '../Grid/Header/GridHeader.js'
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function Results(props) {


    const prop = props.home_props;

    const showMoreItems = () => {
        if (prop.visible > prop.repos.length) {
            return <h1>No more results to show.</h1>
        } else {
            prop.setVisible(prevValue => prevValue + 10);
        }

    }

    function renderRepo(repo) {
        return (
            <TableRow
                key={repo.node_id}
            >
                <TableCell>{repo.commit.author.date}st</TableCell>
                <TableCell><a href={repo.commit.url}>{repo.commit.message}</a></TableCell>
                <TableCell>{repo.commit.author.name}</TableCell>
            </TableRow>
        )
    }

    return (
        <>
       
            <Box>
                <div className="results-container" data-testid="results-div">
                    <GridIntro user={prop.userName} repo={prop.repoName} />
                    <TableContainer component={Paper}>
                        <Table sx={{ margin:'auto', maxWidth: '75VW' }} aria-label="commit table">
                            <TableHead>
                                <GridHeader />
                            </TableHead>
                            <TableBody>
                                {prop.repos.slice(0, prop.visible).map(renderRepo)}
                                {prop.visible > prop.repos.length ? <h1>No more data to show.</h1> :

                                    <TableRow style={{ justifyContent: 'center' }}>
                                        <TableCell></TableCell>
                                        <TableCell style={{textAlign:'center'}}>
                                        <Button
                                                    className="submit-btn"
                                                    variant="contained"
                                                    onClick={showMoreItems}
                                                    style={{ backgroundColor: "#1ed995", color: 'black', fontWeight: 'bold' }}>Load more</Button>
                                        </TableCell>
                                        <TableCell></TableCell>
                                    </TableRow>}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </Box>


        </>
    )

}