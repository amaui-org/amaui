import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddToHomeScreenSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddToHomeScreenSharp'
      short_name='AddToHomeScreen'

      {...props}
    >
      <path d="M4.4 17 3 15.6 8.6 10H5V8H12V15H10V11.4ZM8 21H18V20H8ZM8 4H18V3H8ZM6 23V17H8V18H18V6H8V7H6V1H20V23ZM8 4V3V4ZM8 21V20V21Z"/>
    </Icon>
  );
});

export default IconMaterialAddToHomeScreenSharp;
