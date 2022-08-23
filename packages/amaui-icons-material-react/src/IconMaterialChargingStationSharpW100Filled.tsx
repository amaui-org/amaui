import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChargingStationSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChargingStationSharpW100Filled'
      short_name='ChargingStation'

      {...props}
    >
      <path d="M11.6 16V12.8H10L12.4 8V11.2H14ZM6.3 21.7V2.3H17.7V21.7ZM7 18.65H17V5.35H7Z"/>
    </Icon>
  );
});

IconMaterialChargingStationSharpW100Filled.displayName = 'AmauiIconMaterialChargingStationSharpW100Filled';

export default IconMaterialChargingStationSharpW100Filled;
