import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialThermostatAutoFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThermostatAutoFilled'

      short_name='ThermostatAuto'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 21q-2.075 0-3.537-1.462Q3 18.075 3 16q0-1.2.525-2.238Q4.05 12.725 5 12V6q0-1.25.875-2.125T8 3q1.25 0 2.125.875T11 6v6q.95.725 1.475 1.762Q13 14.8 13 16q0 2.075-1.462 3.538Q10.075 21 8 21Zm-3-5h6q0-.725-.312-1.35-.313-.625-.888-1.05L9 13V6q0-.425-.287-.713Q8.425 5 8 5t-.713.287Q7 5.575 7 6v7l-.8.6q-.575.425-.888 1.05Q5 15.275 5 16Zm8.625-3L17 4h1.6l3.425 9h-1.55l-.8-2.3h-3.7l-.8 2.3Zm2.8-3.6h2.75L17.85 5.65h-.05Z"/>
    </Icon>
  );
});

IconMaterialThermostatAutoFilled.displayName = 'AmauiIconMaterialThermostatAutoFilled';

export default IconMaterialThermostatAutoFilled;
