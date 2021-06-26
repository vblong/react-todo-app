import React, { useState } from "react"
import { FaPlusCircle } from "react-icons/fa"

const InputTodo = props => {
  const [input, setInput] = useState({
    title: "",
    cost: "",
    currency: "Gold"
  })

  const onChangeTitle = e => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
  }

  const onChangeCost = e => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
  }

  const onChangeCurrency = e => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    props.addTodoProps(input.title, input.cost, input.currency)
    setInput({
      title: "",
      cost: "",
      currency: input.currency
    })
  }

  return (
    <form onSubmit={handleSubmit} 
      className="form-container"
    >
        <div style={{width: "50%", margin: "0px 10px"}}>
          <input
              type="text"
              className="input-text"
              placeholder="Next upgrade"
              value={input.title}
              name="title"
              onChange={onChangeTitle}
              required
          />
        </div>
        <div style={{width: "50%", margin: "0px 10px"}}>
          <input
              type="number"
              className="input-text"
              placeholder="Cost"
              value={input.cost}
              name="cost"
              onChange={onChangeCost}
              required
          />
        </div>
        <div style={{width: "50%", margin: "0px 10px"}}>
          <select name="currency" onChange={onChangeCurrency}>
            <option value="Gold">Gold</option>
            <option value="Elixir">Elixir</option>
            <option value="Dark Elixir">Dark Elixir</option>
          </select>
        </div>
        <button className="input-submit">
          <FaPlusCircle style={{ color: "darkcyan", fontSize: "20px", marginTop: "0px" }}/>
        </button>
    </form>
  )
}

export default InputTodo