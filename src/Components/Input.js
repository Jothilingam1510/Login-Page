import React from 'react';
import '../App.css'
const Input = ({ type, value, onChange, placeholder }) => {
  return (
    <div >
      <input className='emailtext'
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
