import React from 'react';
import {
  DirectionalHint,
  TooltipHost,
  Icon
} from 'office-ui-fabric-react';
import PropTypes from 'prop-types';

export const TooltipIcon = ({ content, ...props }) => {
  return (
    <TooltipHost
      calloutProps={{
        isBeakVisible: false,
        directionalHint: DirectionalHint.topAutoEdge,
        gapSpace: 8 // spacing.s1
      }}
      content={content}
      tooltipProps={React.isValidElement(content) ? {
        onRenderContent: () => content
      } : {}}
      {...props}
    >
      <Icon
        iconName="Info"
        styles={{ root: { verticalAlign: 'middle', cursor: 'pointer' } }}
      />
    </TooltipHost>
  );
};

TooltipIcon.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string), PropTypes.node])
};

export default TooltipIcon
