import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialThermostatAutoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThermostatAutoW100Filled'

      short_name='ThermostatAuto'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.2 19.7q-1.55 0-2.625-1.075T4.5 16q0-.975.513-1.85.512-.875 1.487-1.45V6q0-.725.488-1.213Q7.475 4.3 8.2 4.3t1.213.487Q9.9 5.275 9.9 6v6.7q.975.575 1.487 1.45.513.875.513 1.85 0 1.5-1.1 2.6t-2.6 1.1Zm-3-3.7h6q0-.75-.425-1.463-.425-.712-1.225-1.287L9.2 13V6q0-.425-.287-.713Q8.625 5 8.2 5t-.712.287Q7.2 5.575 7.2 6v7l-.35.25q-.8.575-1.225 1.287Q5.2 15.25 5.2 16Zm8.35-3 3.55-9h.35l3.6 9h-.8l-1.1-2.7H15.4L14.3 13Zm2.1-3.35h3.25l-1.6-4.1h-.1Z"/>
    </Icon>
  );
});

IconMaterialThermostatAutoW100Filled.displayName = 'AmauiIconMaterialThermostatAutoW100Filled';

export default IconMaterialThermostatAutoW100Filled;
