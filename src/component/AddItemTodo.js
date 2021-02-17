import React from 'react'

function AddItemTodo({ items }) {
    const itemsArrey = items.map((item, index) => {
        return (
            <p key={index} >{item}</p>
        )
    })
    return (
        <div>
            {itemsArrey}
        </div>
    )
}

export default AddItemTodo
