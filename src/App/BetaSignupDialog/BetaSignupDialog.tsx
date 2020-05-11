import React from 'react'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'
import { validateEmail } from '../../helpers'

type BetaSignupDialogProps = {
    open: boolean,
    handleClose: any
}

export default function BetaSignupDialog({ open, handleClose, ...rest }: BetaSignupDialogProps) {

    const [email, setEmail] = React.useState('')

    async function handleSignup() {
        // Otherwise try to signup the user
    }

    function handleInputChange(e: any) {
        setEmail(e.target.value)
    }

    return (
        <Dialog open={open} onClose={handleClose} {...rest}>
            <DialogTitle id="form-dialog-title">
                Beta Signup
            </DialogTitle>

            <DialogContent>
                <DialogContentText>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi quod \
                    incidunt pariatur a rem voluptate voluptas, iste rerum dolorem saepe \
                    culpa quis accusamus voluptatem officia, aut odio aspernatur nostrum \
                    necessitatibus.
                </DialogContentText>
                <TextField 
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    fullWidth
                    onChange={handleInputChange}
                    value={email}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleSignup} color="primary" disabled={!validateEmail(email)}>
                    Signup
                </Button>
            </DialogActions>
        </Dialog>
    )
}