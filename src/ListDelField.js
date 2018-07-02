import React from 'react';
import { Button, ButtonIcon } from 'rmwc/Button';
import connectField from 'uniforms/connectField';
import filterDOMProps from 'uniforms/filterDOMProps';

const ListDel = ({
  buttonIcon,
  disabled,
  name,
  parent,
  placeholder,
  ...props
}) => {
  const fieldIndex = +name.slice(1 + name.lastIndexOf('.'));
  const limitNotReached = !disabled && !(parent.minCount >= parent.value.length);

  return (

    <Button
      type="button"
      disabled={!limitNotReached}
      onClick={() => limitNotReached && parent.onChange([]
                  .concat(parent.value.slice(0, fieldIndex))
                  .concat(parent.value.slice(1 + fieldIndex)))}
      {...filterDOMProps(props)}
    >
      <ButtonIcon use={buttonIcon || 'remove_circle'} />
      {placeholder || 'Remove'}
    </Button>

  );
};

export default connectField(ListDel, { includeParent: true, initialValue: false });
