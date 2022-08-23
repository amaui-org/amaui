import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDesktopWindowsSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DesktopWindowsSharpW100'
      short_name='DesktopWindows'

      {...props}
    >
      <path d="M9.3 19.4V18.7H11.3V16.7H3.3V4.3H20.7V16.7H12.7V18.7H14.7V19.4ZM4 16H20V5H4ZM4 16V5V16Z"/>
    </Icon>
  );
});

IconMaterialDesktopWindowsSharpW100.displayName = 'AmauiIconMaterialDesktopWindowsSharpW100';

export default IconMaterialDesktopWindowsSharpW100;
