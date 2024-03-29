import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialThermometerFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThermometerFilled'

      short_name='Thermometer'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21q-2.075 0-3.537-1.462Q7 18.075 7 16q0-1.2.525-2.238Q8.05 12.725 9 12V6q0-1.25.875-2.125T12 3q1.25 0 2.125.875T15 6v6q.95.725 1.475 1.762Q17 14.8 17 16q0 2.075-1.462 3.538Q14.075 21 12 21Zm-1-11h2V6q0-.425-.287-.713Q12.425 5 12 5t-.712.287Q11 5.575 11 6Z"/>
    </Icon>
  );
});

IconMaterialThermometerFilled.displayName = 'AmauiIconMaterialThermometerFilled';

export default IconMaterialThermometerFilled;
