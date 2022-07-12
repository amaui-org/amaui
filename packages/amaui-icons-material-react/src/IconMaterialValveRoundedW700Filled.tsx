import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialValveRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ValveRoundedW700Filled'
      short_name='Valve'

      {...props}
    >
      <path d="M10.425 7.8v-3h-4V1.65h11.15V4.8h-4v3ZM2.65 23.1V12.8H5.8v1h1.85v-1.85h-1V8.8h10.675v3.15h-1v1.85h1.85v-1h3.15v10.3h-3.15v-1H5.8v1Z"/>
    </Icon>
  )
});

export default IconMaterialValveRoundedW700Filled;
