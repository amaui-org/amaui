import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAirlineSeatFlatRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineSeatFlatRoundedW100Filled'
      short_name='AirlineSeatFlat'

      {...props}
    >
      <path d="M9.7 12.7V9Q9.7 8.725 9.913 8.512Q10.125 8.3 10.4 8.3H17.3Q18.425 8.3 19.212 9.087Q20 9.875 20 11V12.7ZM4.35 15.4Q4.2 15.4 4.1 15.3Q4 15.2 4 15.05Q4 14.9 4.1 14.8Q4.2 14.7 4.35 14.7H19.65Q19.8 14.7 19.9 14.8Q20 14.9 20 15.05Q20 15.2 19.9 15.3Q19.8 15.4 19.65 15.4ZM5.85 12.7Q5.05 12.7 4.525 12.175Q4 11.65 4 10.85Q4 10.05 4.525 9.525Q5.05 9 5.85 9Q6.65 9 7.175 9.525Q7.7 10.05 7.7 10.85Q7.7 11.65 7.175 12.175Q6.65 12.7 5.85 12.7Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatFlatRoundedW100Filled.displayName = 'AmauiIconMaterialAirlineSeatFlatRoundedW100Filled';

export default IconMaterialAirlineSeatFlatRoundedW100Filled;
