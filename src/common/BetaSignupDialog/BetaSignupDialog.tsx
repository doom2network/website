import React from 'react'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

type BetaSignupDialogProps = {
    open: boolean,
    onClose: any,
    onChange: any,
    email: string,
    error: string,
    handleSignup: any,
    submitting: boolean,
    emailIsValid: boolean
}

export default function BetaSignupDialog({ open, onClose, onChange, email, error, handleSignup, emailIsValid, submitting, ...rest }: BetaSignupDialogProps) {

    return (
        <Dialog open={open} onClose={onClose} {...rest}>
            <DialogTitle id="form-dialog-title">
                Beta Signup
            </DialogTitle>

            <DialogContent>
                <DialogContentText>
                    Be the first to know about all the cool services we're building, including a Doom wad API!
                </DialogContentText>

                {error && <Typography color="error">{error}</Typography>}

                <TextField 
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    fullWidth
                    onChange={onChange}
                    value={email}
                    error={Boolean(error)}
                />

            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleSignup} color="primary" disabled={!emailIsValid}>
                    Signup
                </Button>
            </DialogActions>
        </Dialog>
    )
}