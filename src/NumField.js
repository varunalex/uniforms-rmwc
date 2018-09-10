import React, { Component } from 'react';
import { TextField, TextFieldIcon, TextFieldHelperText } from 'rmwc/TextField';
import connectField from 'uniforms/connectField';
import filterDOMProps from 'uniforms/filterDOMProps';

const noneIfNaN = x => (isNaN(x) ? undefined : x);

const Num_ = ({
  decimal,
  disabled,
  error,
  errorMessage,
  id,
  helpertext,
  inputProps,
  inputRef,
  label,
  max,
  min,
  name,
  onChange,
  placeholder,
  showInlineError,
  step,
  value,
  withLeadingIcon,
  ...props
}) =>
  (
    <div>
      <TextField
        disabled={disabled}
        id={id}
        invalid={!!error}
        max={max}
        min={min}
        name={name}
        label={label}
        onChange={onChange}
        placeholder={placeholder}
        ref={inputRef}
        type="number"
        value={value}
        withLeadingIcon={withLeadingIcon}
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
  )
;

// NOTE: React < 16 workaround. Make it optional?
class Num extends Component {
  constructor () {
    super(...arguments);

    this.state = { value: `${this.props.value}` };

    this.onChange = this.onChange.bind(this);
  }

  componentWillReceiveProps ({ decimal, value }) {
    const parse = decimal ? parseFloat : parseInt;

    if (noneIfNaN(parse(value)) !== noneIfNaN(parse(this.state.value.replace(/[.,]+$/, '')))) {
      this.setState({ value: value === undefined || value === '' ? '' : `${value}` });
    }
  }

  onChange ({ target: { value } }) {
    const change = value.replace(/[^\d.,-]/g, '');

    this.setState({ value: change });
    this.props.onChange(noneIfNaN((this.props.decimal ? parseFloat : parseInt)(change)));
  }

  render () {
    return Num_({ ...this.props, onChange: this.onChange, value: this.state.value });
  }
}

export default connectField(Num);
