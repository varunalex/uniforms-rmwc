import React from 'react';
import { Checkbox } from '@rmwc/checkbox';
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
        label={label}
        indeterminate={indeterminate}
        name={name}
        onChange={() => disabled || onChange(!value)}
        ref={inputRef}
        type="checkbox"
      />
    </div>);
export default connectField(Bool);
