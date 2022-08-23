import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChargingStationSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChargingStationSharp'
      short_name='ChargingStation'

      {...props}
    >
      <path d="M11.5 17V13H9.5L12.5 7V11H14.5ZM5 23V1H19V23ZM7 18H17V6H7ZM7 21H17V20H7ZM7 4H17V3H7ZM7 4V3V4ZM7 21V20V21Z"/>
    </Icon>
  );
});

IconMaterialChargingStationSharp.displayName = 'AmauiIconMaterialChargingStationSharp';

export default IconMaterialChargingStationSharp;
