import React from 'react'

const Form = ({setInputText}) => {
    const inputTextHandler = (e) =>{
        console.log(e.target.value)
        setInputText(e.target.value)
    }

    const formSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.value)
    }

    return(
        <div>
            <form onSubmit={formSubmit}>
                <input type="text" className="todo-input" onChange={inputTextHandler}/>
                <button className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select name="todos" className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Form