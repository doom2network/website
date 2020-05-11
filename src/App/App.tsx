import React from 'react';
import Container from '@material-ui/core/Container'
import TopAppBar from '../TopAppBar/TopAppBar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import BetaSignupDialog from './BetaSignupDialog/BetaSignupDialog'

import './App.css';

const useStyles = makeStyles(theme => ({
    root: {},
    actionContainer: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3)
    },
    button: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1)
    }
}));

export default function() {
    
    const classes = useStyles()

    const [betaSignupOpen, setBetaSignupOpen] = React.useState(false)

    const handleBetaSignupClose = () => setBetaSignupOpen(false)

    return (
        <div className={classes.root}>
            <TopAppBar />

            <Container maxWidth="sm" className={classes.actionContainer}>
                <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                    Centralized DooM Resources
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary">
                    The Doom 2 network offers resources for Doom and Doom 2. This includes wad hosting, a Doom API, server provisioning, and more.
                </Typography>
                
                <Box display="flex" justifyContent="center" alignItems="center" marginTop="1em">
                    <Button 
                        color="primary" 
                        variant="contained" 
                        className={classes.button} 
                        onClick={() => setBetaSignupOpen(true)}
                        disabled
                    >
                            Become a beta tester (coming soon!)
                    </Button>
                    <Button 
                        color="secondary" 
                        variant="contained" 
                        className={classes.button}
                        href="https://github.com/doom2network" 
                        target="_blank"
                    >
                        Our GitHub
                    </Button>
                </Box>

                <BetaSignupDialog open={betaSignupOpen} handleClose={handleBetaSignupClose} />

            </Container>

            <Container maxWidth="sm">
                <Typography align="center" color="textSecondary">
                    Copyright {new Date().getFullYear()} doom2network
                </Typography>
            </Container>

        </div>
    );
}