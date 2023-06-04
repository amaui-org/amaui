import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTableRestaurant = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableRestaurant'

      short_name='TableRestaurant'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.325 9h15.35l-.85-3H5.2ZM12 7.5ZM6.95 13h10.1l-.25-2H7.225ZM4 20l1.225-9h-3.55l2-7h16.65l2 7H18.8l1.2 9h-2l-.675-5H6.675L6 20Z"/>
    </Icon>
  );
});

IconMaterialTableRestaurant.displayName = 'AmauiIconMaterialTableRestaurant';

export default IconMaterialTableRestaurant;
