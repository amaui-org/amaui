import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocalParkingRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalParkingRoundedW100Filled'
      short_name='LocalParking'

      {...props}
    >
      <path d="M8 19.7Q7.725 19.7 7.513 19.487Q7.3 19.275 7.3 19V5Q7.3 4.725 7.513 4.512Q7.725 4.3 8 4.3H13Q14.925 4.3 16.312 5.687Q17.7 7.075 17.7 9Q17.7 10.925 16.312 12.312Q14.925 13.7 13 13.7H8.7V19Q8.7 19.275 8.5 19.487Q8.3 19.7 8 19.7ZM8.7 12.3H13Q14.35 12.3 15.325 11.325Q16.3 10.35 16.3 9Q16.3 7.65 15.325 6.675Q14.35 5.7 13 5.7H8.7Z"/>
    </Icon>
  );
});

IconMaterialLocalParkingRoundedW100Filled.displayName = 'AmauiIconMaterialLocalParkingRoundedW100Filled';

export default IconMaterialLocalParkingRoundedW100Filled;
