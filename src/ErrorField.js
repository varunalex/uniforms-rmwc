import React from 'react';
import { TextFieldHelperText } from 'rmwc/TextField';
import connectField from 'uniforms/connectField';
import filterDOMProps from 'uniforms/filterDOMProps';
import nothing from 'uniforms/nothing';

const Error = ({
  children, error, errorMessage, helperText, ...props
}) =>
  (!error ? (
    <TextFieldHelperText>
      {children || helperText}
    </TextFieldHelperText>
  ) : (
    <TextFieldHelperText persistent validationMsg {...filterDOMProps(props)}>
      {children || errorMessage}
    </TextFieldHelperText>
  ));
export default connectField(Error, { initialValue: false });
