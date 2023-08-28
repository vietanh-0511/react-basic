import React from "react"
import List from "../../components/users/List"
import axios from "../../api/axios"
import { Box, Button } from "@mui/material"

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
                <Box component="div" sx={{ m:5 }}>
                    <Box component="div" sx={{ display:'flex', justifyContent: 'flex-end', my:2 }}>
                        <Button variant="contained" onClick={() => {window.location.replace('/users/create')}}>Create</Button>
                    </Box>
                    <List users = { this.state.users } />
                </Box>
            </div>
        )
    }
}

export default Users