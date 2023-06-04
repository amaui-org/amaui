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
      <path d="M6.55 12.9h10.925l-.4-2.95H6.925Zm-1.1 5.825q-.15 0-.25-.112-.1-.113-.075-.263l1.125-8.4h-2.4q-.275 0-.45-.225t-.1-.5L4.4 5.45q.05-.2.2-.313.15-.112.35-.112h14.125q.2.025.35.137.15.113.2.313l1.1 3.75q.075.275-.1.5-.175.225-.45.225H17.75l1.125 8.4q.025.15-.075.263-.1.112-.25.112-.125 0-.225-.087-.1-.088-.125-.213l-.65-4.825H6.45l-.65 4.825q-.025.125-.125.213-.1.087-.225.087Z"/>
    </Icon>
  );
});

IconMaterialTableRestaurantW100Filled.displayName = 'AmauiIconMaterialTableRestaurantW100Filled';

export default IconMaterialTableRestaurantW100Filled;
