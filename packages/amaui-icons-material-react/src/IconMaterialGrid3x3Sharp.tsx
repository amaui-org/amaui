import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGrid3x3Sharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Grid3x3Sharp'
      short_name='Grid3x3'

      {...props}
    >
      <path d="M8 20V16H4V14H8V10H4V8H8V4H10V8H14V4H16V8H20V10H16V14H20V16H16V20H14V16H10V20ZM10 14H14V10H10Z"/>
    </Icon>
  );
});

export default IconMaterialGrid3x3Sharp;
