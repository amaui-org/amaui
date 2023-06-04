import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLaptopWindowsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LaptopWindowsW100'

      short_name='LaptopWindows'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1.3 18.4v-.7h3.5V17H3.3V5.6h17.4V17h-1.5v.7h3.5v.7ZM4 16.3h16v-10H4Zm0 0v-10 10Z"/>
    </Icon>
  );
});

IconMaterialLaptopWindowsW100.displayName = 'AmauiIconMaterialLaptopWindowsW100';

export default IconMaterialLaptopWindowsW100;
