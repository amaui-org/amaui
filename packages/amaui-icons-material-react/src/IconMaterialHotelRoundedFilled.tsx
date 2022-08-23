import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHotelRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HotelRoundedFilled'
      short_name='Hotel'

      {...props}
    >
      <path d="M2 20Q1.575 20 1.288 19.712Q1 19.425 1 19V6Q1 5.575 1.288 5.287Q1.575 5 2 5Q2.425 5 2.713 5.287Q3 5.575 3 6V15H11V9Q11 8.175 11.588 7.587Q12.175 7 13 7H19Q20.65 7 21.825 8.175Q23 9.35 23 11V19Q23 19.425 22.712 19.712Q22.425 20 22 20Q21.575 20 21.288 19.712Q21 19.425 21 19V17H3V19Q3 19.425 2.713 19.712Q2.425 20 2 20ZM7 14Q5.75 14 4.875 13.125Q4 12.25 4 11Q4 9.75 4.875 8.875Q5.75 8 7 8Q8.25 8 9.125 8.875Q10 9.75 10 11Q10 12.25 9.125 13.125Q8.25 14 7 14Z"/>
    </Icon>
  );
});

IconMaterialHotelRoundedFilled.displayName = 'AmauiIconMaterialHotelRoundedFilled';

export default IconMaterialHotelRoundedFilled;
