import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialThermostatSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThermostatSharpW100'
      short_name='Thermostat'

      {...props}
    >
      <path d="M11.8 10.35V9.65H16.6V10.35ZM11.8 6.65V5.95H19.6V6.65ZM8.1 19.7Q6.55 19.7 5.475 18.625Q4.4 17.55 4.4 16Q4.4 15.025 4.913 14.15Q5.425 13.275 6.4 12.7V6Q6.4 5.275 6.888 4.787Q7.375 4.3 8.1 4.3Q8.825 4.3 9.312 4.787Q9.8 5.275 9.8 6V12.7Q10.775 13.275 11.288 14.15Q11.8 15.025 11.8 16Q11.8 17.5 10.7 18.6Q9.6 19.7 8.1 19.7ZM5.1 16H11.1Q11.1 15.25 10.675 14.537Q10.25 13.825 9.45 13.25L9.1 13V6Q9.1 5.575 8.812 5.287Q8.525 5 8.1 5Q7.675 5 7.388 5.287Q7.1 5.575 7.1 6V13L6.75 13.25Q5.95 13.825 5.525 14.537Q5.1 15.25 5.1 16Z"/>
    </Icon>
  );
});

IconMaterialThermostatSharpW100.displayName = 'AmauiIconMaterialThermostatSharpW100';

export default IconMaterialThermostatSharpW100;
