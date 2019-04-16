import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const Form = (props) => {

	const [input, setInput] = useState('');

	const inputStyles = {
		borderRadius: '2px',
		height: '30px',
		width: '300px',
		padding: '5px',
		marginRight: '20px',
		
	}

	const formStyles = {
		justifyContent: 'space-between',
		alignContent: 'center',
		

	}

	const contStyles = {

	}
    
        return (
            <form  onSubmit={(e)=> { props.addTodo(input, e); setInput('');}}>
			<div style={formStyles}>
				<TextField 
					
				    value={input}
					placeholder="Add todo list item"
					autoComplete="off"
					style={inputStyles}
					onChange={e => setInput(e.target.value)}
					
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