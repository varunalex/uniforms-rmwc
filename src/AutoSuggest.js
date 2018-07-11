import React from 'react';
import { TextField, TextFieldIcon, TextFieldHelperText } from 'rmwc/TextField';
import Autosuggest from 'react-autosuggest';
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
  suggestions,
  onSuggestionsFetchRequested,
  onSuggestionsClearRequested,
  getSuggestionValue,
  renderSuggestion,
  inputProps,
  ...props
}) => {
  const renderInput = () => (
    <span>
      <TextField
        name={name}
        disabled={disabled}
        id={id}
        invalid={!!error}
        label={label}
        onChange={event => onChange(event.target.value)}
        placeholder={placeholder}
        ref={inputRef}
        type={type}
        value={value}
        {...filterDOMProps(props)}
      />
    </span>
  );
  const suggestion = [
    {
      text: 'Apple',
    },
    {
      text: 'Banana',
    },
    {
      text: 'Cherry',
    },
    {
      text: 'Grapefruit',
    },
    {
      text: 'Lemon',
    },
  ];
  return (
    <div>
      <Autosuggest
        renderInputComponent={renderInput}
        suggestions={suggestion}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
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
