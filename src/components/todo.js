import React from 'react';

export const Todo = (props) => {
    return(
        <div>
            <input type="text" value={props.value} className="input-text" onChange={props.EditText}/>
            <input type="submit" value="Add ToDo" onClick={props.ChangeText}/>
            <p>{props.value}</p>
        </div>
    );
}