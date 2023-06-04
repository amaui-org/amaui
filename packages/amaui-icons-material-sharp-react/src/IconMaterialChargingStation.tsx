import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChargingStation = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChargingStation'

      short_name='ChargingStation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.5 17v-4h-2l3-6v4h2ZM5 23V1h14v22Zm2-5h10V6H7Zm0 3h10v-1H7ZM7 4h10V3H7Zm0 0V3v1Zm0 17v-1 1Z"/>
    </Icon>
  );
});

IconMaterialChargingStation.displayName = 'AmauiIconMaterialChargingStation';

export default IconMaterialChargingStation;
