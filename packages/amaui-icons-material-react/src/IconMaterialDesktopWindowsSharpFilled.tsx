import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDesktopWindowsSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DesktopWindowsSharpFilled'
      short_name='DesktopWindows'

      {...props}
    >
      <path d="M8 22V20H10V18H2V3H22V18H14V20H16V22Z"/>
    </Icon>
  );
});

IconMaterialDesktopWindowsSharpFilled.displayName = 'AmauiIconMaterialDesktopWindowsSharpFilled';

export default IconMaterialDesktopWindowsSharpFilled;
