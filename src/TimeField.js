import React from 'react';
import { TextField, TextFieldIcon, TextFieldHelperText } from '@rmwc/textfield';
import connectField from 'uniforms/connectField';
import filterDOMProps from 'uniforms/filterDOMProps';

const dateFormat = value => value && value.toISOString().slice(0, -8);
const dateParse = (timestamp, onChange) => {
  const time = new Date(timestamp);
  if (time) {
    onChange(time);
  } else if (isNaN(timestamp)) {
    onChange(undefined);
  }
};

const Time_ = ({
  disabled,
  error,
  errorMessage,
  id,
  inputRef,
  label,
  helpertext,
  max,
  min,
  name,
  onChange,
  placeholder,
  value,
  ...props
}) =>
  (
    <div>
      <TextField
        disabled={disabled}
        id={id}
        invalid={!!error}
        label={label}
        max={dateFormat(max)}
        min={dateFormat(min)}
        name={name}
        onChange={event => dateParse(event.target.valueAsNumber, onChange)}
        ref={inputRef}
        type="time"
        {...filterDOMProps(props)}
      />
      {
  !error ? (
    <TextFieldHelperText>
      {helpertext}
    </TextFieldHelperText>
  ) : (
    <TextFieldHelperText persistent validationMsg {...filterDOMProps(props)}>
      {errorMessage}
    </TextFieldHelperText>
  )

    }
    </div>
  );
Time_.displayName = 'Time';

export default connectField(Time_);
