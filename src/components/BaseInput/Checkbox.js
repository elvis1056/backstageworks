import React from 'react';
import { Checkbox as UICheckBox } from 'office-ui-fabric-react/lib/Checkbox';

export const Checkbox = ({ ...props }) => {
  return (
    <UICheckBox
      styles={{
        checkbox: { borderRadius: '3px' }
      }}
      {...props}
    />
  )
}

export default Checkbox
