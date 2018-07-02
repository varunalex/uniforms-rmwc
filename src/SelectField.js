import React from 'react';
import { Checkbox } from 'rmwc/Checkbox';
import { Select as SelectRMWC } from 'rmwc/Select';
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
  allowedValues, disabled, fieldType, id, indeterminate, name, onChange, transform, value, label,
}) =>
  allowedValues.map(item =>
    (
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
        />
      </div>
    ));
const renderSelect = ({
  allowedValues,
  disabled,
  id,
  inputRef,
  label,
  name,
  onChange,
  placeholder,
  required,
  transform,
  value,
}) =>
  (
    <SelectRMWC
      disabled={disabled}
      id={id}
      name={name}
      label={label}
      onChange={event => onChange(event.target.value)}
      ref={inputRef}
      value={value}
      placeholder={placeholder}
      options={allowedValues}
    />);
const Select = ({
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
    <div {...filterDOMProps(props)}>
      {/* TODO: Better handling of these props. */}
      {/* eslint-disable max-len */}
      {checkboxes || fieldType === Array
            ? renderCheckboxes({
allowedValues, disabled, id, name, onChange, transform, value, fieldType,
})
            : renderSelect({
allowedValues, disabled, id, name, onChange, transform, value, inputRef, label, placeholder, required,
})
        }
      {/* eslint-enable */}
    </div>);
export default connectField(Select);
