import React from "react";

function Input (props) {
    const { type, placeholder, value, onChange, py, w } = props;

    const paddingYClass = py ? `py-${py}` : 'py-0';
    const widthClass = w ? `w-${w}` : 'w-full';

    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`border-2 border-gray-300 rounded-md px-4 ${paddingYClass} ${widthClass} mt-2 focus:outline-none focus:border-blue-500`}
        />
    );
}

function ContainerInput( {type, placeholder, value, onChange, label, py, w} ) {
    return (
        // <div className="">
            <label className="block mb-3 font-mono" htmlFor={label}>
                {label}
                <Input type={type} placeholder={placeholder} value={value} onChange={onChange} py={py} w={w}/>   
            </label>
        // </div>
    );
}



export {ContainerInput};