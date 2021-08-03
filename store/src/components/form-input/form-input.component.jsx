import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <div className="group">
    <input className='form-input' onChange={handleChange} {...otherProps} />
    {label ? (
        <lable
         className={
             otherProps.value.lenght ? "shrink" : ""
           }> 
          {label}
        </lable>
    ): null}
    </div>
);

export default FormInput;