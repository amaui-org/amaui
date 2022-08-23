import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddToHomeScreenRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddToHomeScreenRoundedFilled'
      short_name='AddToHomeScreen'

      {...props}
    >
      <path d="M3.7 16.3Q3.425 16.025 3.425 15.6Q3.425 15.175 3.7 14.9L8.6 10H6Q5.575 10 5.287 9.712Q5 9.425 5 9Q5 8.575 5.287 8.287Q5.575 8 6 8H11Q11.425 8 11.713 8.287Q12 8.575 12 9V14Q12 14.425 11.713 14.712Q11.425 15 11 15Q10.575 15 10.288 14.712Q10 14.425 10 14V11.4L5.1 16.3Q4.825 16.575 4.4 16.575Q3.975 16.575 3.7 16.3ZM8 23Q7.175 23 6.588 22.413Q6 21.825 6 21V17H8V18H18V6H8V7H6V3Q6 2.175 6.588 1.587Q7.175 1 8 1H18Q18.825 1 19.413 1.587Q20 2.175 20 3V21Q20 21.825 19.413 22.413Q18.825 23 18 23Z"/>
    </Icon>
  );
});

IconMaterialAddToHomeScreenRoundedFilled.displayName = 'AmauiIconMaterialAddToHomeScreenRoundedFilled';

export default IconMaterialAddToHomeScreenRoundedFilled;
