import React from 'react';

const Todo = ({todo, remove}) => {
    return (
        <div>
            <li>{todo.text}</li>
            <span onClick={()=>{remove(todo.id)}}>X</span>
        </div>
    );
};

export default Todo;