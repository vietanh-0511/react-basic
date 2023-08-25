import React from "react"
import List from "../../components/users/List"
import axios from "../../api/axios"
import { Button } from "@mui/material"

class Users extends React.Component {

    state = {
        users: []
    }
  
    addNewItem = (item) => {
        axios.post('https://6441f73376540ce22581bab3.mockapi.io/api/to-do-list/todos', item).then(response =>{
            if (response) {
                this.fetchUsers()
            }
        })
    }

    onChangeHandle(event) {
        this.setState ({
            name: event.target.value
        })
    }

    fetchUsers = () => {
        axios.get('users').then(response =>{
            this.setState({
                users: response.data.data.data
            })
            console.log(this.state.users);
        })
    }

    componentDidMount() {
        this.fetchUsers()
    }

    render() {
        return (
            <div>
                <Button variant="contained" onClick={() => {window.location.replace('/users/create')}}>Create</Button>
                <List users = { this.state.users } />
            </div>
        )
    }
}

export default Users