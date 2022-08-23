import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPowerSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerSharp'
      short_name='Power'

      {...props}
    >
      <path d="M11.5 19H12.5V17.15L16 13.65V9H8V13.65L11.5 17.15ZM9.5 21V18L6 14.5V7H8V3H10V7H14V3H16V7H18V14.5L14.5 18V21ZM12 14V9V14Z"/>
    </Icon>
  );
});

IconMaterialPowerSharp.displayName = 'AmauiIconMaterialPowerSharp';

export default IconMaterialPowerSharp;
