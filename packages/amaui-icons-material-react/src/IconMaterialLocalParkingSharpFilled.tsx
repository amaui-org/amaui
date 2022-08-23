import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocalParkingSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalParkingSharpFilled'
      short_name='LocalParking'

      {...props}
    >
      <path d="M6 21V3H13Q15.5 3 17.25 4.75Q19 6.5 19 9Q19 11.5 17.25 13.25Q15.5 15 13 15H10V21ZM10 11H13.2Q14.025 11 14.613 10.412Q15.2 9.825 15.2 9Q15.2 8.175 14.613 7.587Q14.025 7 13.2 7H10Z"/>
    </Icon>
  );
});

IconMaterialLocalParkingSharpFilled.displayName = 'AmauiIconMaterialLocalParkingSharpFilled';

export default IconMaterialLocalParkingSharpFilled;
