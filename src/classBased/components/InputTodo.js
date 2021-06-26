import React from "react"

class InputTodo extends React.Component {
    state = {
        title: "",
        fName: "",
        lName: ""
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form-container">
                <input 
                    className="input-text"
                    type="text" 
                    placeholder="Next Upgrade" 
                    value={this.state.title} 
                    onChange={this.onChange} 
                    name="title"/>
                <input 
                    className="input-text"
                    type="text" 
                    placeholder="Price" 
                    value={this.state.title} 
                    onChange={this.onChange} 
                    name="price"/>
                <button className="input-submit">Submit</button>
            </form>
        )
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    handleSubmit = e => {
        e.preventDefault();
        if(this.state.title.trim()) {
            this.props.addTodoProps(this.state.title);
            this.setState({
                title: ""
            });   
        } else {
            alert("Please write something");
        }
    }
}

export default InputTodo