import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAirlineSeatFlatRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineSeatFlatRoundedFilled'
      short_name='AirlineSeatFlat'

      {...props}
    >
      <path d="M9 14V9Q9 8.175 9.588 7.587Q10.175 7 11 7H18Q19.65 7 20.825 8.175Q22 9.35 22 11V14ZM3 17Q2.575 17 2.288 16.712Q2 16.425 2 16Q2 15.575 2.288 15.287Q2.575 15 3 15H21Q21.425 15 21.712 15.287Q22 15.575 22 16Q22 16.425 21.712 16.712Q21.425 17 21 17ZM5 14Q3.75 14 2.875 13.125Q2 12.25 2 11Q2 9.75 2.875 8.875Q3.75 8 5 8Q6.25 8 7.125 8.875Q8 9.75 8 11Q8 12.25 7.125 13.125Q6.25 14 5 14Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatFlatRoundedFilled.displayName = 'AmauiIconMaterialAirlineSeatFlatRoundedFilled';

export default IconMaterialAirlineSeatFlatRoundedFilled;
