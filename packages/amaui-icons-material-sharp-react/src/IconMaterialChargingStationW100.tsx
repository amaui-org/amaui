import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChargingStationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChargingStationW100'

      short_name='ChargingStation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.6 16v-3.2H10L12.4 8v3.2H14Zm-5.3 5.7V2.3h11.4v19.4Zm.7-3.05h10V5.35H7ZM7 21h10v-1.65H7ZM7 4.65h10V3H7Zm0 0V3v1.65ZM7 21v-1.65V21Z"/>
    </Icon>
  );
});

IconMaterialChargingStationW100.displayName = 'AmauiIconMaterialChargingStationW100';

export default IconMaterialChargingStationW100;
