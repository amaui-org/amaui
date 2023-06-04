import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDesktopMacW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DesktopMacW100Filled'

      short_name='DesktopMac'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.65 18.3v-.7l1.85-1.85H3.3V4.3h17.4v11.45h-8.2l1.85 1.85v.7Z"/>
    </Icon>
  );
});

IconMaterialDesktopMacW100Filled.displayName = 'AmauiIconMaterialDesktopMacW100Filled';

export default IconMaterialDesktopMacW100Filled;
