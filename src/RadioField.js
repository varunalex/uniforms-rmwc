import React from 'react';
import { Radio as RadioRMWC } from '@rmwc/radio';
import connectField from 'uniforms/connectField';
import filterDOMProps from 'uniforms/filterDOMProps';

const Radio = ({
  allowedValues,
  checkboxes, // eslint-disable-line no-unused-vars
  disabled,
  id,
  label,
  name,
  onChange,
  transform,
  value,
  ...props
}) =>
  (<div {...filterDOMProps(props)}>
    {label && (
    <label>
      {label}
    </label>
        )}

    {allowedValues.map(item =>
          (
            <RadioRMWC
              key={item}
              checked={item === value}
              disabled={disabled}
              id={`${id}-${item}`}
              name={name}
              onChange={() => onChange(item)}
              type="radio"
            >{transform ? transform(item) : item}
            </RadioRMWC>
           ))}
   </div>);
export default connectField(Radio);
