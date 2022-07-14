import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSmartDisplaySharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartDisplaySharp'
      short_name='SmartDisplay'

      {...props}
    >
      <path d="M9.5 16.5 16.5 12 9.5 7.5ZM2 20V4H22V20ZM4 18H20V6H4ZM4 18V6V18Z"/>
    </Icon>
  );
});

export default IconMaterialSmartDisplaySharp;
