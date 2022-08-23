import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDesktopWindowsSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DesktopWindowsSharp'
      short_name='DesktopWindows'

      {...props}
    >
      <path d="M8 22V20H10V18H2V3H22V18H14V20H16V22ZM4 16H20V5H4ZM4 16V5V16Z"/>
    </Icon>
  );
});

IconMaterialDesktopWindowsSharp.displayName = 'AmauiIconMaterialDesktopWindowsSharp';

export default IconMaterialDesktopWindowsSharp;
