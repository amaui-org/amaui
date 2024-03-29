import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeviceThermostat = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeviceThermostat'

      short_name='DeviceThermostat'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-2.075 0-3.537-1.462Q7 19.075 7 17q0-1.2.525-2.238Q8.05 13.725 9 13V5q0-1.25.875-2.125T12 2q1.25 0 2.125.875T15 5v8q.95.725 1.475 1.762Q17 15.8 17 17q0 2.075-1.462 3.538Q14.075 22 12 22Zm-1-11h2v-1h-1V9h1V7h-1V6h1V5q0-.425-.287-.713Q12.425 4 12 4t-.712.287Q11 4.575 11 5Z"/>
    </Icon>
  );
});

IconMaterialDeviceThermostat.displayName = 'AmauiIconMaterialDeviceThermostat';

export default IconMaterialDeviceThermostat;
