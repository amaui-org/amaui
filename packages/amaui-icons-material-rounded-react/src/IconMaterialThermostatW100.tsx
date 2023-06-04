import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialThermostatW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThermostatW100'

      short_name='Thermostat'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.8 10.35v-.7h4.8v.7Zm0-3.7v-.7h7.8v.7ZM8.1 19.7q-1.55 0-2.625-1.075T4.4 16q0-.975.513-1.85.512-.875 1.487-1.45V6q0-.725.488-1.213Q7.375 4.3 8.1 4.3t1.212.487Q9.8 5.275 9.8 6v6.7q.975.575 1.488 1.45.512.875.512 1.85 0 1.5-1.1 2.6t-2.6 1.1Zm-3-3.7h6q0-.75-.425-1.463-.425-.712-1.225-1.287L9.1 13V6q0-.425-.288-.713Q8.525 5 8.1 5t-.712.287Q7.1 5.575 7.1 6v7l-.35.25q-.8.575-1.225 1.287Q5.1 15.25 5.1 16Z"/>
    </Icon>
  );
});

IconMaterialThermostatW100.displayName = 'AmauiIconMaterialThermostatW100';

export default IconMaterialThermostatW100;
