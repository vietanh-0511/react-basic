import React from "react"
import Form from "../../components/Form";
import List from "../../components/List";
import axios from "axios";

class ToDoList extends React.Component {

    state = {
        toDoList: []
    }
  
    addNewItem = (item) => {
        axios.post('https://6441f73376540ce22581bab3.mockapi.io/api/to-do-list/todos', item).then(response =>{
            if (response) {
                this.fetchTodos()
            }
        })
    }

    onChangeHandle(event) {
        this.setState ({
            name: event.target.value
        })
    }

    fetchTodos = () => {
        axios.get('https://6441f73376540ce22581bab3.mockapi.io/api/to-do-list/todos').then(response =>{
            this.setState({
                toDoList: response.data
            })
            console.log(this.state.toDoList);
        })
    }

    componentDidMount() {
        this.fetchTodos()
    }

    render() {
        return (
            <div>
                <Form addNewItem = { this.addNewItem }/>
                <List toDoList = { this.state.toDoList } />
            </div>
        )
    }
}

export default ToDoList