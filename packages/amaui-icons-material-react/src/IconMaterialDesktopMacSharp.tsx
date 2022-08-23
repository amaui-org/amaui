import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDesktopMacSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DesktopMacSharp'
      short_name='DesktopMac'

      {...props}
    >
      <path d="M8 22V21L10 19H2V3H22V19H14L16 21V22ZM4 14H20V5H4ZM4 14V5V14Z"/>
    </Icon>
  );
});

IconMaterialDesktopMacSharp.displayName = 'AmauiIconMaterialDesktopMacSharp';

export default IconMaterialDesktopMacSharp;
