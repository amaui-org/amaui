import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialThermostatAutoSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThermostatAutoSharpFilled'
      short_name='ThermostatAuto'

      {...props}
    >
      <path d="M8 21Q5.925 21 4.463 19.538Q3 18.075 3 16Q3 14.8 3.525 13.762Q4.05 12.725 5 12V6Q5 4.75 5.875 3.875Q6.75 3 8 3Q9.25 3 10.125 3.875Q11 4.75 11 6V12Q11.95 12.725 12.475 13.762Q13 14.8 13 16Q13 18.075 11.538 19.538Q10.075 21 8 21ZM5 16H11Q11 15.275 10.688 14.65Q10.375 14.025 9.8 13.6L9 13V6Q9 5.575 8.713 5.287Q8.425 5 8 5Q7.575 5 7.287 5.287Q7 5.575 7 6V13L6.2 13.6Q5.625 14.025 5.312 14.65Q5 15.275 5 16ZM13.625 13 17 4H18.6L22.025 13H20.475L19.675 10.7H15.975L15.175 13ZM16.425 9.4H19.175L17.85 5.65H17.8Z"/>
    </Icon>
  );
});

IconMaterialThermostatAutoSharpFilled.displayName = 'AmauiIconMaterialThermostatAutoSharpFilled';

export default IconMaterialThermostatAutoSharpFilled;
