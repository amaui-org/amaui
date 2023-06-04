import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDesktopWindowsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DesktopWindowsW100'

      short_name='DesktopWindows'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.65 19.4q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h1.65v-2H4.8q-.625 0-1.063-.438Q3.3 15.825 3.3 15.2V5.8q0-.625.437-1.063Q4.175 4.3 4.8 4.3h14.4q.625 0 1.063.437.437.438.437 1.063v9.4q0 .625-.437 1.062-.438.438-1.063.438h-6.5v2h1.65q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1ZM4.8 16h14.4q.35 0 .575-.225Q20 15.55 20 15.2V5.8q0-.35-.225-.575Q19.55 5 19.2 5H4.8q-.35 0-.575.225Q4 5.45 4 5.8v9.4q0 .35.225.575Q4.45 16 4.8 16ZM4 16V5v11Z"/>
    </Icon>
  );
});

IconMaterialDesktopWindowsW100.displayName = 'AmauiIconMaterialDesktopWindowsW100';

export default IconMaterialDesktopWindowsW100;
