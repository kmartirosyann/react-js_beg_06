import React, { Component } from 'react'
import styles from './todo.module.css'

export default class Todo extends Component {
  

    render() {
        const { hendelSubmit, hendelChange, inputValue } = this.props
        return (
            <div>
                <div className=" row">
                    <div className="input-field col s6">
                        <input 
                            id="first_name"
                            type="text"
                            className="validate"
                            value={inputValue}
                            onChange={hendelChange}
                             name="inputValue" 
                            />
                        <label htmlFor="first_name" className = {inputValue && styles.inputTextLeble}>First Name</label>
                        <button onClick={() => hendelSubmit({ inputValue: inputValue, id: Math.random() * 100 })} className="btn btn-susser">submit</button>
                    </div>
                </div>
            </div>
        )
    }
}





