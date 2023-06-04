import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTableRestaurantW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableRestaurantW100'

      short_name='TableRestaurant'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 9.25h16l-1.025-3.5H5.05Zm8-1.75Zm-5.45 5.4h10.925l-.4-2.95H6.925Zm-1.475 5.825L6.25 9.95H3.075l1.45-4.9H19.5l1.45 4.9h-3.2l1.175 8.775h-.675l-.7-5.125H6.45l-.7 5.125Z"/>
    </Icon>
  );
});

IconMaterialTableRestaurantW100.displayName = 'AmauiIconMaterialTableRestaurantW100';

export default IconMaterialTableRestaurantW100;
