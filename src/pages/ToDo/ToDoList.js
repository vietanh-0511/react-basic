import React from "react"
import Form from "../../components/Form";
import List from "../../components/List";

class ToDoList extends React.Component {

    state = {
        name: "Viet Anh",
        toDoList: [
            {
                id: 1,
                content: "learn react",
                deadline: "31-08-2023"
            },
            {
                id: 2,
                content: "build a test project",
                deadline: "31-09-2023"
            }
        ]
    }
  
    addNewItem = (item) => {
      console.log(item)
      this.setState({
        toDoList: [...this.state.toDoList, item]
      })
    }

    onChangeHandle(event) {
        this.setState ({
            name: event.target.value
        })
    }

    render() {
        return (
            <div>
                adu vjp
                <Form addNewItem = { this.addNewItem }/>
                <List toDoList = { this.state.toDoList } />
            </div>
        )
    }
}

export default ToDoList