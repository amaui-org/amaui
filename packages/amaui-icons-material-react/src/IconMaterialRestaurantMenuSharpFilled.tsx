import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRestaurantMenuSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RestaurantMenuSharpFilled'
      short_name='RestaurantMenu'

      {...props}
    >
      <path d="M4.375 21 2.975 19.6 13.225 9.35Q12.775 8.3 13.1 6.975Q13.425 5.65 14.525 4.6Q15.85 3.275 17.475 3.05Q19.1 2.825 20.125 3.85Q21.15 4.875 20.925 6.5Q20.7 8.125 19.375 9.45Q18.325 10.55 17 10.875Q15.675 11.2 14.625 10.75L13.375 12L20.975 19.6L19.575 21L11.975 13.45ZM7.325 12.45 4.325 9.45Q2.975 8.1 2.975 6.225Q2.975 4.35 4.325 3L10.525 9.25Z"/>
    </Icon>
  );
});

IconMaterialRestaurantMenuSharpFilled.displayName = 'AmauiIconMaterialRestaurantMenuSharpFilled';

export default IconMaterialRestaurantMenuSharpFilled;
