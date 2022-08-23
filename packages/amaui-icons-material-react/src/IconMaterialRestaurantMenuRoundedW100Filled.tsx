import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRestaurantMenuRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RestaurantMenuRoundedW100Filled'
      short_name='RestaurantMenu'

      {...props}
    >
      <path d="M4.175 19.85Q4.05 19.725 4.05 19.6Q4.05 19.475 4.175 19.35L14.025 9.5Q13.5 8.25 13.775 7.137Q14.05 6.025 15.025 5.05Q15.9 4.175 17.325 3.75Q18.75 3.325 19.725 4.3Q20.7 5.275 20.275 6.7Q19.85 8.125 18.975 9Q18 9.975 16.887 10.25Q15.775 10.525 14.525 10L12.525 12L19.875 19.35Q20 19.475 20 19.6Q20 19.725 19.875 19.85Q19.75 19.975 19.625 19.975Q19.5 19.975 19.375 19.85L12.025 12.55L4.675 19.85Q4.55 19.975 4.425 19.975Q4.3 19.975 4.175 19.85ZM7.525 11.7 4.825 9Q3.925 8.1 3.725 6.912Q3.525 5.725 4.025 4.6Q4.15 4.325 4.45 4.275Q4.75 4.225 5 4.475L9.875 9.35Z"/>
    </Icon>
  );
});

IconMaterialRestaurantMenuRoundedW100Filled.displayName = 'AmauiIconMaterialRestaurantMenuRoundedW100Filled';

export default IconMaterialRestaurantMenuRoundedW100Filled;
