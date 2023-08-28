import { TextField } from "@mui/material"
import React from "react"
import isEmpty from "validator/lib/isEmpty"

class Form extends React.Component {
    state = {
        id: "",
        content: "",
        contentError: false,
        contentErrorMsg: "",
    }

    validation = () => {
        console.log(this.state.content);
        const msg = {}
        if (isEmpty(this.state.content)) {
            msg.content = "content cannot be empty"
        }
        this.setState({
            contentErrorMsg: msg
        })
        if (Object.keys(msg).length > 0) {
            this.setState({
                contentError: true
            })
            return false
        }
        else {
            this.setState({
                contentError: false
            })
            return true
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if (this.validation() === true) {
            this.props.addNewItem({
                // id: Math.floor(Math.random() * 1674),
                content: this.state.content
            })
        }
    }

    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <div>
                    <TextField
                        id="content"
                        value={this.state.content}
                        label="Content"
                        helperText={this.state.contentErrorMsg.content}
                        error={this.state.contentError}
                        dark
                        onChange={(event) => this.setState({content: event.target.value})}
                        onBlur={() => this.validation()}
                    />
                </div>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default Form