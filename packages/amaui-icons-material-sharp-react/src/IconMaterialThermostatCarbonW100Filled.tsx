import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialThermostatCarbonW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThermostatCarbonW100Filled'

      short_name='ThermostatCarbon'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.05 19.95q-.45.45-1.05.45-.6 0-1.05-.45l-6.9-6.9Q3.6 12.6 3.6 12q0-.6.45-1.05l6.9-6.9Q11.4 3.6 12 3.6q.6 0 1.05.45l6.9 6.9q.45.45.45 1.05 0 .6-.45 1.05Zm-.475-.5 6.875-6.875q.2-.2.2-.575 0-.375-.2-.575L12.575 4.55q-.2-.2-.575-.2-.375 0-.575.2L4.55 11.425q-.2.2-.2.575 0 .375.2.575l6.875 6.875q.2.2.575.2.375 0 .575-.2Z"/>
    </Icon>
  );
});

IconMaterialThermostatCarbonW100Filled.displayName = 'AmauiIconMaterialThermostatCarbonW100Filled';

export default IconMaterialThermostatCarbonW100Filled;
