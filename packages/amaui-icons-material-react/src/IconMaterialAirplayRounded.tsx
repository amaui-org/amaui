import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAirplayRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirplayRounded'
      short_name='Airplay'

      {...props}
    >
      <path d="M8.425 21Q7.75 21 7.488 20.387Q7.225 19.775 7.7 19.3L11.3 15.7Q11.45 15.55 11.625 15.487Q11.8 15.425 12 15.425Q12.2 15.425 12.375 15.487Q12.55 15.55 12.7 15.7L16.3 19.3Q16.775 19.775 16.513 20.387Q16.25 21 15.575 21ZM4 19Q3.175 19 2.588 18.413Q2 17.825 2 17V5Q2 4.175 2.588 3.587Q3.175 3 4 3H20Q20.825 3 21.413 3.587Q22 4.175 22 5V17Q22 17.825 21.413 18.413Q20.825 19 20 19H18Q17.575 19 17.288 18.712Q17 18.425 17 18Q17 17.575 17.288 17.288Q17.575 17 18 17H20Q20 17 20 17Q20 17 20 17V5Q20 5 20 5Q20 5 20 5H4Q4 5 4 5Q4 5 4 5V17Q4 17 4 17Q4 17 4 17H6Q6.425 17 6.713 17.288Q7 17.575 7 18Q7 18.425 6.713 18.712Q6.425 19 6 19ZM12 11.5Q12 11.5 12 11.5Q12 11.5 12 11.5Q12 11.5 12 11.5Q12 11.5 12 11.5Q12 11.5 12 11.5Q12 11.5 12 11.5Q12 11.5 12 11.5Q12 11.5 12 11.5Q12 11.5 12 11.5Q12 11.5 12 11.5Q12 11.5 12 11.5Q12 11.5 12 11.5Z"/>
    </Icon>
  );
});

IconMaterialAirplayRounded.displayName = 'AmauiIconMaterialAirplayRounded';

export default IconMaterialAirplayRounded;
