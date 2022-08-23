import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWheelchairPickupSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WheelchairPickupSharp'
      short_name='WheelchairPickup'

      {...props}
    >
      <path d="M6.5 6Q5.675 6 5.088 5.412Q4.5 4.825 4.5 4Q4.5 3.175 5.088 2.587Q5.675 2 6.5 2Q7.325 2 7.912 2.587Q8.5 3.175 8.5 4Q8.5 4.825 7.912 5.412Q7.325 6 6.5 6ZM5 22V15H3V7H10V10.95Q8.425 11.85 7.463 13.45Q6.5 15.05 6.5 17Q6.5 18.425 7.025 19.688Q7.55 20.95 8.5 21.9V22ZM13.5 22Q11.425 22 9.963 20.538Q8.5 19.075 8.5 17Q8.5 15.325 9.488 14.037Q10.475 12.75 12 12.25V14.425Q11.325 14.825 10.913 15.5Q10.5 16.175 10.5 17Q10.5 18.25 11.375 19.125Q12.25 20 13.5 20Q14.75 20 15.625 19.125Q16.5 18.25 16.5 17H18.5Q18.5 19.075 17.038 20.538Q15.575 22 13.5 22ZM20.925 19.7 18.45 16H13V8H15V14H19.55L22.6 18.6Z"/>
    </Icon>
  );
});

IconMaterialWheelchairPickupSharp.displayName = 'AmauiIconMaterialWheelchairPickupSharp';

export default IconMaterialWheelchairPickupSharp;
