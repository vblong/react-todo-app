import React from "react"
import TodoItem from "./TodoItem"
import styles from "./TodoList.module.css"

const TodosList = props => {
  return (
    <div>
      <div className={styles.header}>
          <div style={{width: "15%", float: "left"}}>Done</div>
          <div style={{width: "50%", float: "left"}}>Next Upgrade</div>
          <div style={{width: "30%", float: "left"}}>Price</div>
          <div style={{width: "5%", float: "left"}}></div>
      </div>
      {props.todos.map(todo => (
        <div className={styles.itemContainer}>
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={props.handleChangeProps}
            deleteTodoProps={props.deleteTodoProps}
            editTodoProps={props.editTodoProps}
            setUpdate={props.setUpdate}
          />
        </div>
      ))}
    </div>
  )
}
export default TodosList