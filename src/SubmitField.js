import BaseField from 'uniforms/BaseField';
import React from 'react';
import { Button, ButtonIcon } from 'rmwc/Button';
import filterDOMProps from 'uniforms/filterDOMProps';

const SubmitField = ({
  disabled, inputRef, value, buttonIcon, ...props
}, { uniforms: { error, state } }) =>
  (
    <Button
      disabled={disabled === undefined ? !!(error || state.disabled) : disabled}
      ref={inputRef}
      type="submit"
      {...filterDOMProps(props)}
    >
      {buttonIcon ? <ButtonIcon use={buttonIcon} /> : ''}
      {value || 'Button'}
    </Button>);
SubmitField.contextTypes = BaseField.contextTypes;

export default SubmitField;
