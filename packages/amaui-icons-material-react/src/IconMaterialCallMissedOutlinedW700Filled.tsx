import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCallMissedOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallMissedOutlinedW700Filled'
      short_name='CallMissed'

      {...props}
    >
      <path d="M11.875 18.225 5.45 11.8V15.575H2.3V6.425H11.45V9.575H7.675L11.875 13.8L19.475 6.2L21.7 8.425Z"/>
    </Icon>
  )
});

export default IconMaterialCallMissedOutlinedW700Filled;
