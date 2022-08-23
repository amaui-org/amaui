import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTableRestaurantSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableRestaurantSharp'
      short_name='TableRestaurant'

      {...props}
    >
      <path d="M4.325 9H19.675L18.825 6H5.2ZM12 7.5ZM6.95 13H17.05L16.8 11H7.225ZM4 20 5.225 11H1.675L3.675 4H20.325L22.325 11H18.8L20 20H18L17.325 15H6.675L6 20Z"/>
    </Icon>
  );
});

IconMaterialTableRestaurantSharp.displayName = 'AmauiIconMaterialTableRestaurantSharp';

export default IconMaterialTableRestaurantSharp;
