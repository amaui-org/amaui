import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChargingStationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChargingStationFilled'

      short_name='ChargingStation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.5 17v-4h-2l3-6v4h2ZM5 23V1h14v22Zm2-5h10V6H7Z"/>
    </Icon>
  );
});

IconMaterialChargingStationFilled.displayName = 'AmauiIconMaterialChargingStationFilled';

export default IconMaterialChargingStationFilled;
