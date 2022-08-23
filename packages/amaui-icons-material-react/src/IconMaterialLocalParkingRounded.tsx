import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocalParkingRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalParkingRounded'
      short_name='LocalParking'

      {...props}
    >
      <path d="M8 21Q7.175 21 6.588 20.413Q6 19.825 6 19V5Q6 4.175 6.588 3.587Q7.175 3 8 3H13Q15.5 3 17.25 4.75Q19 6.5 19 9Q19 11.5 17.25 13.25Q15.5 15 13 15H10V19Q10 19.825 9.413 20.413Q8.825 21 8 21ZM10 11H13.2Q14.025 11 14.613 10.412Q15.2 9.825 15.2 9Q15.2 8.175 14.613 7.587Q14.025 7 13.2 7H10Z"/>
    </Icon>
  );
});

IconMaterialLocalParkingRounded.displayName = 'AmauiIconMaterialLocalParkingRounded';

export default IconMaterialLocalParkingRounded;
