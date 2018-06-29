import React from 'react';
import { TextField, TextFieldIcon } from 'rmwc/TextField';
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
  id,
  inputRef,
  label,
  max,
  min,
  name,
  onChange,
  placeholder,
  value,
  ...props
}) =>
  (<TextField
    disabled={disabled}
    id={id}
    invalid={!!error}
    label={label}
    max={dateFormat(max)}
    min={dateFormat(min)}
    name={name}
    onChange={event => dateParse(event.target.valueAsNumber, onChange)}
    ref={inputRef}
    type="datetime-local"
    value={dateFormat(value)}
    {...filterDOMProps(props)}
  />
  );
Date_.displayName = 'Date';

export default connectField(Date_);
