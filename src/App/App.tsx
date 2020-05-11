import React from 'react';
import Container from '@material-ui/core/Container'
import TopAppBar from '../common/TopAppBar/TopAppBar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import HomePage from '../scenes/HomePage/HomePage'

import './App.css';

const useStyles = makeStyles(theme => ({
    root: {},
}));

export default function App() {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <TopAppBar />

            <HomePage />

            <Container maxWidth="sm">
                <Typography align="center" color="textSecondary">
                    Copyright {new Date().getFullYear()} doom2network
                </Typography>
            </Container>

        </div>
    );
}