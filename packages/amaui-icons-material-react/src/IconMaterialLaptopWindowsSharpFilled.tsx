import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLaptopWindowsSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LaptopWindowsSharpFilled'
      short_name='LaptopWindows'

      {...props}
    >
      <path d="M0 20V18H4V17H2V3H22V17H20V18H24V20Z"/>
    </Icon>
  );
});

IconMaterialLaptopWindowsSharpFilled.displayName = 'AmauiIconMaterialLaptopWindowsSharpFilled';

export default IconMaterialLaptopWindowsSharpFilled;
