import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRestaurantSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RestaurantSharpFilled'
      short_name='Restaurant'

      {...props}
    >
      <path d="M17 22V14H14V7Q14 4.925 15.463 3.463Q16.925 2 19 2V22ZM7 22V12.85Q5.725 12.5 4.863 11.45Q4 10.4 4 9V2H6V9H7V2H9V9H10V2H12V9Q12 10.4 11.137 11.45Q10.275 12.5 9 12.85V22Z"/>
    </Icon>
  );
});

export default IconMaterialRestaurantSharpFilled;
