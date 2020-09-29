import React from 'react';

const FormInput = (props) => {
  const handleInput = (e) => {
    props.handleChange(e.target.value);
  };

  return (
    <div className='form-label-group'>
      <input
        type={props.type}
        className='form-control'
        placeholder={props.placeholder}
        required={props.required}
        autoFocus={props.autoFocus}
        onInput={handleInput}
      />
      <label>{props.label}</label>
    </div>
  );
};

export default FormInput;
