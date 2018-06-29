import React from 'react';
import { TextField, TextFieldIcon } from 'rmwc/TextField';
import connectField from 'uniforms/connectField';
import filterDOMProps from 'uniforms/filterDOMProps';

const Text = ({
  disabled,
  id,
  inputRef,
  label,
  error,
  helperText,
  name,
  onChange,
  placeholder,
  type,
  value,
  ...props
}) =>
  (
    <TextField
      disabled={disabled}
      id={id}
      invalid={!!error}
      label={label}
      name={name}
      onChange={event => onChange(event.target.value)}
      placeholder={placeholder}
      ref={inputRef}
      type={type}
      value={value}
      {...filterDOMProps(props)}
    />
  );
Text.defaultProps = { type: 'text' };

export default connectField(Text);
