import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, laberl, ...otherProps }) => (
    <div className="group">
    <input className='form-input' onChange={handleChange} {...otherProps} />
    {
        label ?
        <lable>
            
        </lable>
    }

    </div>

)