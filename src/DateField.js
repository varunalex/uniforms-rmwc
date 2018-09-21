import React from 'react';
import { TextField, TextFieldIcon, TextFieldHelperText } from '@rmwc/textfield';
import connectField from 'uniforms/connectField';
import filterDOMProps from 'uniforms/filterDOMProps';

const dateFormat = value => value && value.toISOString().slice(0, -8);
const dateParse = (timestamp, onChange) => {
  const date = new Date(timestamp);
  if (date.getFullYear() < 10000) {
    onChange(date);
  } else if (isNaN(timestamp)) {
    onChange(undefined);
  }
};

const Date_ = ({
  disabled,
  error,
  errorMessage,
  id,
  inputRef,
  label,
  max,
  min,
  helpertext,
  name,
  onChange,
  placeholder,
  value,
  ...props
}) => (
  <div>
    <TextField
      disabled={disabled}
      id={id}
      invalid={!!error}
      label={label}
      max={max}
      min={min}
      name={name}
      onChange={event => dateParse(event.target.valueAsNumber, onChange)}
      ref={inputRef}
      type="date"
      {...filterDOMProps(props)}
    />
    {!error ? (
      <TextFieldHelperText>
        {helpertext}
      </TextFieldHelperText>
      ) : (
        <TextFieldHelperText persistent validationMsg {...filterDOMProps(props)}>
          {errorMessage}
        </TextFieldHelperText>
        )}
  </div>
);
Date_.displayName = 'Date';

export default connectField(Date_);
