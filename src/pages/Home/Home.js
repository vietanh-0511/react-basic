import React from "react"
import axios from "../../api/axios"
import { Alert, Snackbar } from "@mui/material"

class Home extends React.Component {

    state = {
        alert: {
            open: false
        }
    }

    openToast = () => {
      this.setState({
        alert: { open: true }
      });
    }

    closeToast = () => {  
      this.setState({
        alert: { open: false }
      });
    };

    login = () => {
        const credentials = {
            email: 'admin@gmail.com',
            password: '123456'
          }
          axios.post('login', credentials).then(response =>{
              localStorage.setItem('token', response.data.token)
              this.openToast()
          })
    }

    render() {
        return (
            <>
                <h1>Hello from home</h1>
                <button onClick={this.login}>Login</button>
                <Snackbar open={this.state.alert.open} autoHideDuration={3000} onClose={this.closeToast}>
                    <Alert onClose={this.closeToast} severity="success" sx={{ width: "100%" }}>
                      Login successfully!
                    </Alert>
                </Snackbar>
            </>
        )
    }
}

export default Home