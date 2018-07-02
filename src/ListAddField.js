import React from 'react';
import { Button, ButtonIcon } from 'rmwc/Button';
import cloneDeep from 'lodash/cloneDeep';
import connectField from 'uniforms/connectField';
import filterDOMProps from 'uniforms/filterDOMProps';

const ListAdd = ({
  buttonIcon,
  disabled,
  parent,
  value,
  placeholder,
  ...props
}) => {
  const limitNotReached = !disabled && !(parent.maxCount <= parent.value.length);

  return (

    <Button
      type="button"
      disabled={!limitNotReached}
      onClick={() => limitNotReached && parent.onChange(parent.value.concat([cloneDeep(value)]))}
      {...filterDOMProps(props)}
    >
      <ButtonIcon use={buttonIcon || 'add_circle'} />
      {placeholder || 'Add'}
    </Button>

  );
};

export default connectField(ListAdd, { includeParent: true, initialValue: false });
