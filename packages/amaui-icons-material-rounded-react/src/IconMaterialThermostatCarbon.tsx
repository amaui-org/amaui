import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialThermostatCarbon = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThermostatCarbon'

      short_name='ThermostatCarbon'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.425 21.45q-.575.575-1.425.575-.85 0-1.425-.575L2.55 13.425Q1.975 12.85 1.975 12q0-.85.575-1.425l8.025-8.025q.575-.575 1.425-.575.85 0 1.425.575l8.025 8.025q.575.575.575 1.425 0 .85-.575 1.425ZM12 20.025 20.025 12 12 3.975 3.975 12 12 20.025Z"/>
    </Icon>
  );
});

IconMaterialThermostatCarbon.displayName = 'AmauiIconMaterialThermostatCarbon';

export default IconMaterialThermostatCarbon;
