import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRestaurantRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RestaurantRounded'
      short_name='Restaurant'

      {...props}
    >
      <path d="M18 22Q17.575 22 17.288 21.712Q17 21.425 17 21V14H16Q15.175 14 14.588 13.412Q14 12.825 14 12V7Q14 4.925 15.463 3.463Q16.925 2 19 2V21Q19 21.425 18.712 21.712Q18.425 22 18 22ZM8 22Q7.575 22 7.287 21.712Q7 21.425 7 21V12.85Q5.725 12.5 4.863 11.45Q4 10.4 4 9V3Q4 2.575 4.287 2.287Q4.575 2 5 2Q5.425 2 5.713 2.287Q6 2.575 6 3V9H7V3Q7 2.575 7.287 2.287Q7.575 2 8 2Q8.425 2 8.713 2.287Q9 2.575 9 3V9H10V3Q10 2.575 10.288 2.287Q10.575 2 11 2Q11.425 2 11.713 2.287Q12 2.575 12 3V9Q12 10.4 11.137 11.45Q10.275 12.5 9 12.85V21Q9 21.425 8.713 21.712Q8.425 22 8 22Z"/>
    </Icon>
  );
});

IconMaterialRestaurantRounded.displayName = 'AmauiIconMaterialRestaurantRounded';

export default IconMaterialRestaurantRounded;
