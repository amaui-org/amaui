import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTableRestaurantFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableRestaurantFilled'

      short_name='TableRestaurant'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.95 13h10.1l-.25-2H7.225ZM4 20l1.225-9h-3.55l2-7h16.65l2 7H18.8l1.2 9h-2l-.675-5H6.675L6 20Z"/>
    </Icon>
  );
});

IconMaterialTableRestaurantFilled.displayName = 'AmauiIconMaterialTableRestaurantFilled';

export default IconMaterialTableRestaurantFilled;
