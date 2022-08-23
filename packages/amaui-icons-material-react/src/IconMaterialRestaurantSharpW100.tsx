import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRestaurantSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RestaurantSharpW100'
      short_name='Restaurant'

      {...props}
    >
      <path d="M16.65 21.35V13.35H14.35V7Q14.35 5.45 15.138 4.212Q15.925 2.975 17.35 2.7V21.35ZM7.65 21.35V12.35Q6.525 12.225 5.738 11.387Q4.95 10.55 4.95 9.3V2.65H5.65V9.3H7.65V2.65H8.35V9.3H10.35V2.65H11.05V9.3Q11.05 10.55 10.262 11.387Q9.475 12.225 8.35 12.35V21.35Z"/>
    </Icon>
  );
});

IconMaterialRestaurantSharpW100.displayName = 'AmauiIconMaterialRestaurantSharpW100';

export default IconMaterialRestaurantSharpW100;
