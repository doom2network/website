import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import BetaSignupDialog from '../../common/BetaSignupDialog/BetaSignupDialog'
import Container from '@material-ui/core/Container'
import { services } from '../../services/feathers'
import { validateEmail } from '../../helpers';
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert, { AlertProps, Color } from '@material-ui/lab/Alert'

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3)
    },
    button: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1)
    }
}));

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function HomePage(props: any) {

    const classes = useStyles()

    const [betaSignupIsOpen, setBetaSignupIsOpen]       = React.useState(false)
    const [betaEmail, setBetaEmail]                     = React.useState('')
    const [submittingBetaForm, setSubmittingBetaForm]   = React.useState(false)
    const [submitError, setSubmitError]                 = React.useState('')
    const [hasSignedUp, setHasSignedUp]                 = React.useState(false)
    const [snackCtx, setSnackCtx]                       = React.useState<Color>('info')
    const [snackMsg, setSnackMsg]                       = React.useState('')
    const [clientIpAddr, setClientIpAddr]               = React.useState('')

    async function betaSignup() {
        try {
            setSubmittingBetaForm(true)
            const payload = { email: betaEmail }
            const { _id } = await services.users.create(payload)
            if (_id) {
                setHasSignedUp(true)
                setSnackCtx('success')
                setSnackMsg('Success! Check your email for upcoming announcements')
            }
            closeBetaDialog()
        } catch (error) {
            let err = `There was a problem processing your signup`
            if (error.message) 
                err += ': ' + error.message
            setSubmitError(err)
        } finally {
            setSubmittingBetaForm(false)
        }
    }

    function handleBetaInputChange(e: any) {
        setBetaEmail(e.target.value)
    }

    function closeBetaDialog() {
        setSubmitError('')
        setBetaEmail('')
        setBetaSignupIsOpen(false)
    }

    function closeSnack(e: any) {
        setSnackMsg('')
    }

    async function getClientIpAddr() {
        try {
            // TODO: Add this to services instead
            const res = await fetch('https://api.doom2.network:666/ip')
            const { IP: ip } = await res.json()
            setClientIpAddr(ip)
        } catch (error) {
            console.error(error)
        }
    }

    React.useEffect(() => {
        getClientIpAddr()
    }, [] //run once
    )

    return (
        <React.Fragment>

            <Container maxWidth='sm' className={classes.root}>

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
                        onClick={() => setBetaSignupIsOpen(true)}
                        disabled={hasSignedUp}
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

                <BetaSignupDialog 
                    open={betaSignupIsOpen} 
                    onClose={closeBetaDialog} 
                    onChange={handleBetaInputChange}
                    email={betaEmail}
                    error={submitError}
                    handleSignup={betaSignup}
                    emailIsValid={validateEmail(betaEmail)}
                    submitting={submittingBetaForm}
                />

                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    open={Boolean(snackMsg)}
                    autoHideDuration={6000}
                    onClose={closeSnack}
                    message={snackMsg}
                >
                    <Alert onClose={closeSnack} severity={snackCtx}>
                        {snackMsg}
                    </Alert>
                </Snackbar>

            </Container>

        </React.Fragment>
    );

}