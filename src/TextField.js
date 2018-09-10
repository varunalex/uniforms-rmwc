import React from 'react';
import { TextField, TextFieldIcon, TextFieldHelperText } from 'rmwc/TextField';
import connectField from 'uniforms/connectField';
import filterDOMProps from 'uniforms/filterDOMProps';

const Text = ({
  disabled,
  error,
  errorMessage,
  id,
  helpertext,
  inputRef,
  label,
  name,
  onChange,
  placeholder,
  showInlineError,
  type,
  value,
  withLeadingIcon,
  ...props
}) => {
  if (type === 'hidden') {
    return (
      <input
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
  }
  return (
    <div>
      <TextField
        disabled={disabled}
        id={id}
        invalid={!!error}
        label={label}
        name={name}
        onChange={event => onChange(event.target.value)}
        placeholder={placeholder}
        withLeadingIcon={withLeadingIcon}
        ref={inputRef}
        type={type}
        value={value}
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
};
Text.defaultProps = { type: 'text' };

export default connectField(Text);
