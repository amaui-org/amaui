import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLaptopWindowsSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LaptopWindowsSharp'
      short_name='LaptopWindows'

      {...props}
    >
      <path d="M0 20V18H4V17H2V3H22V17H20V18H24V20ZM4 15H20V5H4ZM4 15V5V15Z"/>
    </Icon>
  )
});

export default IconMaterialLaptopWindowsSharp;
