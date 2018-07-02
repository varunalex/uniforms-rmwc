import React from 'react';
import { Checkbox } from 'rmwc/Checkbox';
import connectField from 'uniforms/connectField';
import filterDOMProps from 'uniforms/filterDOMProps';

const Bool = ({
  disabled,
  id,
  inputRef,
  indeterminate,
  label,
  name,
  onChange,
  value,
  ...props
}) =>
  (
    <div {...filterDOMProps(props)}>
      <Checkbox
        checked={value}
        disabled={disabled}
        id={id}
        indeterminate={indeterminate}
        name={name}
        onChange={() => disabled || onChange(!value)}
        ref={inputRef}
        type="checkbox"
      >
        {label && (
        <label htmlFor={id}>
          {label}
        </label>
            )}
      </Checkbox>
    </div>);
export default connectField(Bool);
