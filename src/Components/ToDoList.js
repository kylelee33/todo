import React from 'react';
import ToDoCard from './ToDoCard';

const ToDoList = ({todos, remove, complete}) => {

    const styles = {
         margin: '0 auto',
         width: '100%',
         alignItems: 'center',
         display: 'table',
         paddingLeft: '0%',
         
         

    }

    const contStyles = {
        padding: '10px',
        display: 'flex',
        flexDirection: 'vertical',
        alignItems: 'center',
    }

    const todoNode = todos.map((todo) => {
        return (<ToDoCard todo={todo} key={todo.id} remove={remove} complete={complete} />)
    })

    return (
        <div style={contStyles}>
            <div style={styles}>{todoNode}</div>
        </div>
    );
};

export default ToDoList;