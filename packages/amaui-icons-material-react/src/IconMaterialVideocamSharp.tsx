import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVideocamSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideocamSharp'
      short_name='Videocam'

      {...props}
    >
      <path d="M2 20V4H18V10.5L22 6.5V17.5L18 13.5V20ZM4 18H16V6H4ZM4 6V18Z"/>
    </Icon>
  );
});

IconMaterialVideocamSharp.displayName = 'AmauiIconMaterialVideocamSharp';

export default IconMaterialVideocamSharp;
