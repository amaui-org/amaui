import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeviceThermostatW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeviceThermostatW100Filled'

      short_name='DeviceThermostat'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.7q-1.55 0-2.625-1.075T8.3 17q0-1.05.538-1.925.537-.875 1.462-1.375V5q0-.725.488-1.213Q11.275 3.3 12 3.3t1.213.487Q13.7 4.275 13.7 5v8.7q.925.5 1.463 1.375.537.875.537 1.925 0 1.55-1.075 2.625T12 20.7Zm-1-9.2h2V9.85h-1v-.7h1v-2.3h-1v-.7h1V5q0-.425-.287-.713Q12.425 4 12 4t-.712.287Q11 4.575 11 5Z"/>
    </Icon>
  );
});

IconMaterialDeviceThermostatW100Filled.displayName = 'AmauiIconMaterialDeviceThermostatW100Filled';

export default IconMaterialDeviceThermostatW100Filled;
