import React from "react"
import TodoItem from "./TodoItem"

class TodosList extends React.Component {

    render() {
        return (
            <React.StrictMode>
                <React.Fragment>
                    <ul>{
                        this.props.todos.map(todo => (
                            <TodoItem 
                                key={todo.id} 
                                todo={todo} 
                                handleChangeProps={this.props.handleChangeProps}
                                deleteTodoProps={this.props.deleteTodoProps}
                                setUpdate={this.props.setUpdate}/>
                        ))
                    }</ul>                    
                </React.Fragment>
            </React.StrictMode>
        )
    }
}

export default TodosList