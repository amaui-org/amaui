import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTableRestaurantSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableRestaurantSharpFilled'
      short_name='TableRestaurant'

      {...props}
    >
      <path d="M6.95 13H17.05L16.8 11H7.225ZM4 20 5.225 11H1.675L3.675 4H20.325L22.325 11H18.8L20 20H18L17.325 15H6.675L6 20Z"/>
    </Icon>
  )
});

export default IconMaterialTableRestaurantSharpFilled;
