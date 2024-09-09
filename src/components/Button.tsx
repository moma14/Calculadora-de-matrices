import React from "react";
import {ButtonProps} from '../ButtonProps';

const button: React.FC<ButtonProps>=({value, onClick})=>{
    return(
        <button className="operator" onClick={onClick}>
            {value}
        </button>
    )
}

export default button;