import React from 'react';
import { IconButton as UIIconButton, getTheme } from 'office-ui-fabric-react';

const UITheme = getTheme();

const styles = {
  root: {
    color: UITheme.palette.themePrimary,
    background: 'none'
  },
  iconHovered: {
    color: UITheme.palette.themePrimary,
    transform: 'scale(1.25,1.25)',
    transition: 'transform 0.25s ease'
  }
}

export const IconButton = ({ ...props }) => {
  return (
    <UIIconButton
      styles={styles}
      {...props}
    />
  );
}

export default IconButton;
