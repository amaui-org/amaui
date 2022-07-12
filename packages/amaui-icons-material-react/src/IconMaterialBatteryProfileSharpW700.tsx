import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBatteryProfileSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryProfileSharpW700'
      short_name='BatteryProfile'

      {...props}
    >
      <path d="M1.475 23.15V2.85h3.45v-2h5.15v2h3.45v20.3ZM4.625 20h5.75V6h-5.75Zm14.65-7.275-1.5-3.25L14.525 8l3.25-1.475 1.5-3.25 1.475 3.25L24 8l-3.25 1.475Z"/>
    </Icon>
  )
});

export default IconMaterialBatteryProfileSharpW700;
