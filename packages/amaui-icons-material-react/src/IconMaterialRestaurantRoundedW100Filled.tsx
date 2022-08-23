import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRestaurantRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RestaurantRoundedW100Filled'
      short_name='Restaurant'

      {...props}
    >
      <path d="M17 21.35Q16.85 21.35 16.75 21.25Q16.65 21.15 16.65 21V13.35H15.85Q15.225 13.35 14.788 12.912Q14.35 12.475 14.35 11.85V7Q14.35 5.45 15.138 4.212Q15.925 2.975 17.35 2.7V21Q17.35 21.15 17.25 21.25Q17.15 21.35 17 21.35ZM8 21.35Q7.85 21.35 7.75 21.25Q7.65 21.15 7.65 21V12.35Q6.525 12.225 5.738 11.387Q4.95 10.55 4.95 9.3V3Q4.95 2.85 5.05 2.75Q5.15 2.65 5.3 2.65Q5.45 2.65 5.55 2.75Q5.65 2.85 5.65 3V9.3H7.65V3Q7.65 2.85 7.75 2.75Q7.85 2.65 8 2.65Q8.15 2.65 8.25 2.75Q8.35 2.85 8.35 3V9.3H10.35V3Q10.35 2.85 10.45 2.75Q10.55 2.65 10.7 2.65Q10.85 2.65 10.95 2.75Q11.05 2.85 11.05 3V9.3Q11.05 10.55 10.262 11.387Q9.475 12.225 8.35 12.35V21Q8.35 21.15 8.25 21.25Q8.15 21.35 8 21.35Z"/>
    </Icon>
  );
});

IconMaterialRestaurantRoundedW100Filled.displayName = 'AmauiIconMaterialRestaurantRoundedW100Filled';

export default IconMaterialRestaurantRoundedW100Filled;
