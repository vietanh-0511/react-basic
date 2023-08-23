import React from "react"
import axios from "../../api/axios"

class Home extends React.Component {

    login = () => {
        const credentials = {
            email: 'admin@gmail.com',
            password: '123456'
          }
          axios.post('login', credentials).then(response =>{
              localStorage.setItem('token', response.data.token)
          })
    }

    render() {
        return (
            <>
            <h1>Hello from home</h1>
            <button onClick={this.login}>Login</button>
            </>
        )
    }
}

export default Home