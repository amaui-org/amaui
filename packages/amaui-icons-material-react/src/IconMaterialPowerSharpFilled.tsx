import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPowerSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerSharpFilled'
      short_name='Power'

      {...props}
    >
      <path d="M9.5 21V18L6 14.5V7H8V3H10V7H14V3H16V7H18V14.5L14.5 18V21Z"/>
    </Icon>
  )
});

export default IconMaterialPowerSharpFilled;
