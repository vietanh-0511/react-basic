import { TextField } from "@mui/material"
import React, { useState } from "react"

const Form = () => {


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

export default Form