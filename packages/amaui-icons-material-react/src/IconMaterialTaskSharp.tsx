import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTaskSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TaskSharp'
      short_name='Task'

      {...props}
    >
      <path d="M10.95 18 16.6 12.35 15.15 10.9 10.925 15.125 8.825 13.025 7.4 14.45ZM4 22V2H14L20 8V22ZM13 9V4H6V20H18V9ZM6 4V9V4V9V20Z"/>
    </Icon>
  );
});

export default IconMaterialTaskSharp;
