import React from 'react'
import styles from './todo.module.css'

function AddItemTodo({ items, removeitems }) {
    const itemsArrey = items && items.map((item, index) => {
        return (
            <div className=" row" key={index}>
                <div className="input-field col s6">
                    <input
                        id="first_name"
                        type="text"
                        className="validate"
                        value={item.inputValue}
                        readOnly 
                    />
                    <button className={`btn btn-susser`}onClick={() => removeitems(item.id)}> 
                    <i className="material-icons"> delete</i>
                    </button>
                </div>
            </div>

        )
    })
    return (
        <div>
            {itemsArrey}
        </div>
    )
}

export default AddItemTodo
