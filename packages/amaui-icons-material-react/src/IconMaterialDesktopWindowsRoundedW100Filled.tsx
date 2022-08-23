import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDesktopWindowsRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DesktopWindowsRoundedW100Filled'
      short_name='DesktopWindows'

      {...props}
    >
      <path d="M9.65 19.4Q9.5 19.4 9.4 19.3Q9.3 19.2 9.3 19.05Q9.3 18.9 9.4 18.8Q9.5 18.7 9.65 18.7H11.3V16.7H4.8Q4.175 16.7 3.737 16.262Q3.3 15.825 3.3 15.2V5.8Q3.3 5.175 3.737 4.737Q4.175 4.3 4.8 4.3H19.2Q19.825 4.3 20.263 4.737Q20.7 5.175 20.7 5.8V15.2Q20.7 15.825 20.263 16.262Q19.825 16.7 19.2 16.7H12.7V18.7H14.35Q14.5 18.7 14.6 18.8Q14.7 18.9 14.7 19.05Q14.7 19.2 14.6 19.3Q14.5 19.4 14.35 19.4Z"/>
    </Icon>
  );
});

IconMaterialDesktopWindowsRoundedW100Filled.displayName = 'AmauiIconMaterialDesktopWindowsRoundedW100Filled';

export default IconMaterialDesktopWindowsRoundedW100Filled;
