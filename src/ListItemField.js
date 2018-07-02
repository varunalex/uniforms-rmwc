import React, { Children } from 'react';
import connectField from 'uniforms/connectField';
import joinName from 'uniforms/joinName';

import AutoField from './AutoField';
import ListDelField from './ListDelField';

const ListItem = props =>
  (
    <div>
      {props.children ? (
            Children.map(props.children, child =>
                React.cloneElement(child, {
                    name: joinName(props.name, child.props.name),
                    label: null,
                }))
        ) : (
          <AutoField {...props} />
        )}
      <ListDelField name={props.name} />
    </div>
  );
export default connectField(ListItem, { includeInChain: false, includeParent: true });
