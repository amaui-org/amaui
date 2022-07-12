import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRestaurantOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RestaurantOutlinedW700Filled'
      short_name='Restaurant'

      {...props}
    >
      <path d="M17.775 22.375V14.375H14.775V7Q14.775 4.725 16.475 3.175Q18.175 1.625 20.525 1.625V22.375ZM6.625 22.375V13.3Q5.175 12.95 4.013 11.65Q2.85 10.35 2.85 8.625V1.625H5.625V8.625H6.625V1.625H9.375V8.625H10.375V1.625H13.15V8.625Q13.15 10.35 11.988 11.65Q10.825 12.95 9.375 13.3V22.375Z"/>
    </Icon>
  )
});

export default IconMaterialRestaurantOutlinedW700Filled;
