import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDevicesFoldSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DevicesFoldSharpFilled'
      short_name='DevicesFold'

      {...props}
    >
      <path d="M22 21H10V2.975L17 -0.075V3H22ZM14.675 19H20V5H17V18.025ZM2 5V3H4V5ZM2 21V19H4V21ZM2 17V15H4V17ZM2 13V11H4V13ZM2 9V7H4V9ZM6 5V3H8V5ZM6 21V19H8V21Z"/>
    </Icon>
  );
});

IconMaterialDevicesFoldSharpFilled.displayName = 'AmauiIconMaterialDevicesFoldSharpFilled';

export default IconMaterialDevicesFoldSharpFilled;
