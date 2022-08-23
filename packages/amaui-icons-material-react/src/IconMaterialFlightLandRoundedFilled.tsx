import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlightLandRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlightLandRoundedFilled'
      short_name='FlightLand'

      {...props}
    >
      <path d="M4 21Q3.575 21 3.288 20.712Q3 20.425 3 20Q3 19.575 3.288 19.288Q3.575 19 4 19H20Q20.425 19 20.712 19.288Q21 19.575 21 20Q21 20.425 20.712 20.712Q20.425 21 20 21ZM18.85 15.9 3.725 11.7Q3.4 11.6 3.2 11.35Q3 11.1 3 10.75V7.125Q3 6.65 3.325 6.437Q3.65 6.225 4.1 6.375Q4.275 6.425 4.438 6.588Q4.6 6.75 4.65 6.925L5.2 8.6L10 9.95V3.325Q10 2.775 10.375 2.487Q10.75 2.2 11.3 2.325Q11.575 2.4 11.85 2.65Q12.125 2.9 12.225 3.175L14.75 11.25L19.75 12.65Q20.325 12.8 20.663 13.262Q21 13.725 21 14.3Q21 15.125 20.325 15.625Q19.65 16.125 18.85 15.9Z"/>
    </Icon>
  );
});

IconMaterialFlightLandRoundedFilled.displayName = 'AmauiIconMaterialFlightLandRoundedFilled';

export default IconMaterialFlightLandRoundedFilled;
