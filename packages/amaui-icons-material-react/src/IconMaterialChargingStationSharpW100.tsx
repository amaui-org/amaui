import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChargingStationSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChargingStationSharpW100'
      short_name='ChargingStation'

      {...props}
    >
      <path d="M11.6 16V12.8H10L12.4 8V11.2H14ZM6.3 21.7V2.3H17.7V21.7ZM7 18.65H17V5.35H7ZM7 21H17V19.35H7ZM7 4.65H17V3H7ZM7 4.65V3V4.65ZM7 21V19.35V21Z"/>
    </Icon>
  );
});

IconMaterialChargingStationSharpW100.displayName = 'AmauiIconMaterialChargingStationSharpW100';

export default IconMaterialChargingStationSharpW100;
