import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCheckOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckOutlinedW700Filled'
      short_name='Check'

      {...props}
    >
      <path d="M9.55 18.8 3.05 12.3 5.3 10.05 9.55 14.3 18.7 5.15 20.95 7.4Z"/>
    </Icon>
  )
});

export default IconMaterialCheckOutlinedW700Filled;
