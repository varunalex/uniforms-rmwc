import React from 'react';
import { Checkbox } from 'rmwc/Checkbox';
import { Select } from 'rmwc/Select';
import { TextFieldHelperText } from 'rmwc/TextField';
import connectField from 'uniforms/connectField';
import filterDOMProps from 'uniforms/filterDOMProps';

const xor = (item, array) => {
  const index = array.indexOf(item);
  if (index === -1) {
    return array.concat([item]);
  }

  return array.slice(0, index).concat(array.slice(index + 1));
};

const renderCheckboxes = ({
  allowedValues,
  appearance,
  disabled,
  error,
  errorMessage,
  fieldType,
  fullWidth,
  helpertext,
  id,
  inputRef,
  label,
  margin,
  name,
  onChange,
  required,
  value,
  ...props
}) =>
  allowedValues.map(item =>
    (
      <div>
        <div key={item}>
          <Checkbox
            checked={fieldType === Array ? value.includes(item) : value === item}
            disabled={disabled}
            id={`${id}-${item}`}
            label={label}
            indeterminate={indeterminate}
            name={name}
            onChange={() => onChange(fieldType === Array ? xor(item, value) : item)}
            type="checkbox"
            {...filterDOMProps(props)}
          />
        </div>
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
    ));
const renderSelect = ({
  allowedValues,
  disabled,
  error,
  errorMessage,
  fieldType,
  fullWidth,
  helpertext,
  id,
  inputProps,
  inputRef,
  label,
  margin,
  name,
  native,
  onChange,
  placeholder,
  required,
  showInlineError,
  transform,
  value,
  outlined,
  ...props
}) =>
  (
    <div>
      <Select
        disabled={disabled}
        id={id}
        name={name}
        label={label}
        onChange={event => onChange(event.target.value)}
        ref={inputRef}
        value={value}
        placeholder={placeholder}
        options={allowedValues}
        outlined={outlined}
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
const Selectbox = ({
  allowedValues,
  checkboxes,
  disabled,
  fieldType,
  id,
  inputRef,
  label,
  name,
  onChange,
  placeholder,
  required,
  transform,
  value,
  ...props
}) =>
  (
    <div>
      {/* TODO: Better handling of these props. */}
      {/* eslint-disable max-len */}
      {checkboxes
            ? renderCheckboxes({
          allowedValues, disabled, id, name, onChange, transform, value, fieldType, ...filterDOMProps(props),
})
            : renderSelect({
          allowedValues, disabled, id, name, onChange, transform, value, inputRef, label, placeholder, required, ...filterDOMProps(props),
})
        }
      {/* eslint-enable */}
    </div>);
export default connectField(Selectbox);
