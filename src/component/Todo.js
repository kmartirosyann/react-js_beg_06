import React, { Component } from 'react'

export default class Todo extends Component {


    render() {
        const { hendelSubmit, hendelChange, inputValue } = this.props
        return (
            <div>
                <input
                    type="text"
                    value={inputValue}
                    onChange={hendelChange}
                    name="inputValue"
                />
                <button onClick={() => hendelSubmit(inputValue)}>submit</button>
            </div>
        )
    }
}





