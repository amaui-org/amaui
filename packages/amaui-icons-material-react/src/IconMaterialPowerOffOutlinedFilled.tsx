import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPowerOffOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerOffOutlinedFilled'
      short_name='PowerOff'

      {...props}
    >
      <path d="M19.8 22.6 14.85 17.65 14.5 18V21H9.5V18L6 14.5V8.85Q6 8.85 6 8.85Q6 8.85 6 8.85L1.4 4.2L2.8 2.8L21.2 21.2ZM17.7 14.85 8 5.15V3H10V7H14V3H16V7Q16.825 7 17.413 7.587Q18 8.175 18 9V14.5Z"/>
    </Icon>
  )
});

export default IconMaterialPowerOffOutlinedFilled;
