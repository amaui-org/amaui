import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTableRestaurantW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableRestaurantW100Filled'

      short_name='TableRestaurant'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.55 12.9h10.925l-.4-2.95H6.925Zm-1.475 5.825L6.25 9.95H3.075l1.45-4.925H19.5l1.45 4.925h-3.2l1.175 8.775h-.675l-.7-5.125H6.45l-.7 5.125Z"/>
    </Icon>
  );
});

IconMaterialTableRestaurantW100Filled.displayName = 'AmauiIconMaterialTableRestaurantW100Filled';

export default IconMaterialTableRestaurantW100Filled;
