import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDesktopWindowsSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DesktopWindowsSharpW100Filled'
      short_name='DesktopWindows'

      {...props}
    >
      <path d="M9.3 19.4V18.7H11.3V16.7H3.3V4.3H20.7V16.7H12.7V18.7H14.7V19.4Z"/>
    </Icon>
  );
});

IconMaterialDesktopWindowsSharpW100Filled.displayName = 'AmauiIconMaterialDesktopWindowsSharpW100Filled';

export default IconMaterialDesktopWindowsSharpW100Filled;
