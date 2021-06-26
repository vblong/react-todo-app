import React, { useState, useEffect } from "react"
import styles from "./TodoItem.module.css"
import { FaTrash, FaEdit } from "react-icons/fa"

const TodoItem = props => {
  const [editing, setEditing] = useState(false)

  const handleEditing = () => {
    setEditing(true)
  }

  const handleUpdatedDone = event => {
    if (event.key === "Enter") {
      setEditing(false)
    }
  }

  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }

  const { completed, id, title, cost, currency } = props.todo

  let viewMode = {}
  let editMode = {}

  if (editing) {
    viewMode.display = "none"
  } else {
    editMode.display = "none"
  }

  useEffect(() => {
    return () => {
      console.log("Cleaning up...")
    }
  }, [])

  return (
    <div className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode} >
        <div className={styles.itemContainer} style={{width: "15%", float: "left", textAlign: "center"}}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={completed}
            onChange={() => props.handleChangeProps(id)}
          />
        </div>
        <div className={styles.itemContainer} style={{width: "40%", float: "left"}}>
          <span style={completed ? completedStyle : null}>{title}</span>
        </div>
        <div className={styles.itemContainer} style={{width: "30%", float: "left"}}>
          <span style={completed ? completedStyle : null}>{cost} {currency}</span>
        </div>
        <div className={styles.itemContainer} style={{width: "10%", float: "left"}}>          
          <div style={{width: "50%", float: "left"}}>
            <button onClick={() => props.editTodoProps(id)}>
                <FaEdit style={{ color: "orangered", fontSize: "16px" }} />
            </button>
          </div>
          <div style={{width: "50%", float: "left"}}>
            <button onClick={() => props.deleteTodoProps(id)}>
              <FaTrash style={{ color: "orangered", fontSize: "16px" }} />
            </button>
          </div>
        </div>        
      </div>
      
      <input
        type="text"
        style={editMode}
        className={styles.textInput}
        value={title}
        onChange={e => {
          props.setUpdate(e.target.value, id)
        }}
        onKeyDown={handleUpdatedDone}
      />

      <input
        type="number"
        style={editMode}
        className={styles.textInput}
        value={cost}
        onChange={e => {
          props.setUpdate(e.target.value, id)
        }}
        onKeyDown={handleUpdatedDone}
      />
    </div>    
  )
}

export default TodoItem