import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHomeIotDeviceRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeIotDeviceRoundedW100Filled'
      short_name='HomeIotDevice'

      {...props}
    >
      <path d="M5.9 10.4h1.8V6.9q0-.375-.25-.638Q7.2 6 6.8 6q-.35 0-.625.262-.275.263-.275.638Zm.9 8.3q-1.375 0-2.337-.963Q3.5 16.775 3.5 15.4q0-.95.462-1.712.463-.763 1.238-1.188V6.9q0-.675.475-1.138Q6.15 5.3 6.8 5.3q.7 0 1.15.462.45.463.45 1.138v5.6q.75.425 1.225 1.2.475.775.475 1.725 0 1.35-.975 2.312-.975.963-2.325.963Zm6.125-3.95q-1.025-.65-1.775-1.738-.75-1.087-.75-2.662 0-2.1 1.475-3.575T15.45 5.3q2.1 0 3.575 1.475T20.5 10.35q0 1.575-.75 2.662Q19 14.1 17.975 14.75Zm2.525 3.95q-.5 0-.875-.375t-.375-.875h2.5q0 .5-.375.875t-.875.375Zm-2.25-2.25v-.7h4.5v.7Z"/>
    </Icon>
  );
});

IconMaterialHomeIotDeviceRoundedW100Filled.displayName = 'AmauiIconMaterialHomeIotDeviceRoundedW100Filled';

export default IconMaterialHomeIotDeviceRoundedW100Filled;
