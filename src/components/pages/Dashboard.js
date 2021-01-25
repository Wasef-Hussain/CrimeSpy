import React, { useEffect, useState } from 'react'
import { Typography, Paper, Avatar, CircularProgress, Button } from '@material-ui/core'
import VerifiedUserOutlined from '@material-ui/icons/VerifiedUserOutlined'
import withStyles from '@material-ui/core/styles/withStyles'
import firebase from '../firebase'
import { useAuth} from '../../LoginContext'
import { withRouter,  useHistory } from 'react-router-dom'

const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
})

function Dashboard(props) {
    const { classes } = props
    const { currentUser, logout } = useAuth()
    const [error, setError] = useState("")
    const history = useHistory()

    if (!currentUser.email) {
        // not logged in
        alert('Please login first')
        props.history.replace('/login')
        return null
    }


    async function handleLogout() {
        setError("")
    
        try {
          await logout()
          history.push("/login")
        } catch {
          setError("Failed to log out")
        }
      }
      console.log(currentUser)




    return (
        <main className={classes.main}>
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <VerifiedUserOutlined />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Hello {currentUser.email}
                </Typography>

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="secondary"
                    onClick={handleLogout}
                    className={classes.submit}>
                    Logout
          		</Button>
            </Paper>
        </main>
    )

   
}

export default withRouter(withStyles(styles)(Dashboard))