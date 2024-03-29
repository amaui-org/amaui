import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRestaurantMenuFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RestaurantMenuFilled'

      short_name='RestaurantMenu'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m4.375 21-1.4-1.4 10.25-10.25q-.45-1.05-.125-2.375T14.525 4.6q1.325-1.325 2.95-1.55 1.625-.225 2.65.8 1.025 1.025.8 2.65-.225 1.625-1.55 2.95-1.05 1.1-2.375 1.425-1.325.325-2.375-.125L13.375 12l7.6 7.6-1.4 1.4-7.6-7.55Zm2.95-8.55-3-3q-1.35-1.35-1.35-3.225T4.325 3l6.2 6.25Z"/>
    </Icon>
  );
});

IconMaterialRestaurantMenuFilled.displayName = 'AmauiIconMaterialRestaurantMenuFilled';

export default IconMaterialRestaurantMenuFilled;
