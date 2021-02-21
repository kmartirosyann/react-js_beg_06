import React, { Component } from 'react'
import AddItemTodo from './AddItemTodo'
import Todo from './Todo'

class AddNewTask extends Component {
    state = {
        inputValue: '',
        inputArrey: []
    }
    hendelChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    hendelSubmit = (data) => {
        console.log(data)
        if (data.inputValue !== '') {
            const test = [...this.state.inputArrey, data]
            this.setState({ inputArrey: test, inputValue: '' })
        }
    }
    removeitems = (id) => {
        let remove = this.state.inputArrey.filter((item) => item.id !== id)
        this.setState({ inputArrey: remove })
    }

    render() {

        return (
            <div className="container center-align truncate">
                <Todo
                    hendelSubmit={this.hendelSubmit}
                    hendelChange={this.hendelChange}
                    inputValue={this.state.inputValue}
                />
                <AddItemTodo
                    items={this.state.inputArrey}
                    removeitems={this.removeitems}
                />
            </div>
        )
    }
}


export default AddNewTask