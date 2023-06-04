import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLaptopWindowsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LaptopWindowsW100Filled'

      short_name='LaptopWindows'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1.3 18.4v-.7h3.5V17H3.3V5.6h17.4V17h-1.5v.7h3.5v.7Z"/>
    </Icon>
  );
});

IconMaterialLaptopWindowsW100Filled.displayName = 'AmauiIconMaterialLaptopWindowsW100Filled';

export default IconMaterialLaptopWindowsW100Filled;
