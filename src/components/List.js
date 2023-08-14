import React from "react";

class List extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.toDoList.map(function(item){
                        return (
                            <div key={ item.id }>
                                { item.id } - { item.content } -{ item.deadline}
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default List