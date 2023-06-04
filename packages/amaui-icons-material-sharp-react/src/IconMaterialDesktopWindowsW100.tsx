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
      <path d="M9.3 19.4v-.7h2v-2h-8V4.3h17.4v12.4h-8v2h2v.7ZM4 16h16V5H4Zm0 0V5v11Z"/>
    </Icon>
  );
});

IconMaterialDesktopWindowsW100.displayName = 'AmauiIconMaterialDesktopWindowsW100';

export default IconMaterialDesktopWindowsW100;
