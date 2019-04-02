import React, { Component } from 'react';

import Button from '@material-ui/core/Button';


const Form = (props) => {

	const inputStyles = {
		borderRadius: '2px',
		border: '1px solid #c0c0c0',
		height: '30px',
		width: '300px',
		padding: '5px',
	}

	const formStyles = {
		justifyContent: 'space-between',
		alignContent: 'center',
		

	}

	const contStyles = {

	}
    
    let input = '';

    
        return (
            <form  onSubmit={(e)=> { props.addTodo(input.value, e); console.log(input.value); input.value = '';}}>
			<div style={formStyles}>
				<input 
					
				    ref={node => {
						input = node;
					}}
					placeholder="Add todo list item"
					autoComplete="off"
					style={inputStyles}
					
				/>

				<Button variant="fab" color="primary" type="submit" mini="true">
					+
				</Button>	
				
				</div>
				<Button variant="contained" color="primary" type="button" onClick={props.clear}>
					Clear all
				</Button>	
			</form>
        );
    }


export default Form;