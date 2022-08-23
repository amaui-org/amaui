import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVideoCameraBackSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoCameraBackSharp'
      short_name='VideoCameraBack'

      {...props}
    >
      <path d="M2 20V4H18V10.5L22 6.5V17.5L18 13.5V20ZM4 18H16V6H4ZM5 16H15L11.55 11.5L9.25 14.5L7.7 12.5ZM4 18V6V18Z"/>
    </Icon>
  );
});

IconMaterialVideoCameraBackSharp.displayName = 'AmauiIconMaterialVideoCameraBackSharp';

export default IconMaterialVideoCameraBackSharp;
