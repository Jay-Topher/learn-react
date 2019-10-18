import React from "react";
import UserOutput from "../UserOutput/UserOutput";

const UserInput = props => {
    const inputStyle = {
        border: '2px solid red'
    };

    return (
        <div>
            <input type="text" 
            style={inputStyle}
            onChange={props.update} 
            value={props.currentName}/>
        </div>
    );
};

export default UserInput;