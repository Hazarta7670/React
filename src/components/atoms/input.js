import React from "react";

function Input({data, setData, placeholder, required, type}) {
    return (
        <input
            type={type}
            required={required}
            placeholder={placeholder} 
            value={data}
            onChange={(e) => {setData(e.target.value)}}/>
    )
}

export default Input