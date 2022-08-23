import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAirplayRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirplayRoundedFilled'
      short_name='Airplay'

      {...props}
    >
      <path d="M8.425 21Q7.75 21 7.488 20.387Q7.225 19.775 7.7 19.3L11.3 15.7Q11.45 15.55 11.625 15.487Q11.8 15.425 12 15.425Q12.2 15.425 12.375 15.487Q12.55 15.55 12.7 15.7L16.3 19.3Q16.775 19.775 16.513 20.387Q16.25 21 15.575 21ZM4 19Q3.175 19 2.588 18.413Q2 17.825 2 17V5Q2 4.175 2.588 3.587Q3.175 3 4 3H20Q20.825 3 21.413 3.587Q22 4.175 22 5V17Q22 17.825 21.413 18.413Q20.825 19 20 19H19L13.425 13.425Q13.125 13.125 12.75 12.975Q12.375 12.825 12 12.825Q11.625 12.825 11.25 12.975Q10.875 13.125 10.575 13.425L5 19Z"/>
    </Icon>
  );
});

IconMaterialAirplayRoundedFilled.displayName = 'AmauiIconMaterialAirplayRoundedFilled';

export default IconMaterialAirplayRoundedFilled;
