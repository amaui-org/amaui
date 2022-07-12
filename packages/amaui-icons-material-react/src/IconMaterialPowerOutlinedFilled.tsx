import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPowerOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerOutlinedFilled'
      short_name='Power'

      {...props}
    >
      <path d="M9.5 21V18L6 14.5V9Q6 8.175 6.588 7.587Q7.175 7 8 7V3H10V7H14V3H16V7Q16.825 7 17.413 7.587Q18 8.175 18 9V14.5L14.5 18V21Z"/>
    </Icon>
  )
});

export default IconMaterialPowerOutlinedFilled;
