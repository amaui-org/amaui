import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAirplaySharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirplaySharpW700Filled'
      short_name='Airplay'

      {...props}
    >
      <path d="M6 21.85 12 15.85 18 21.85ZM1.15 19.575V2.15H22.85V19.575H20.65L12 10.925L3.35 19.575Z"/>
    </Icon>
  )
});

export default IconMaterialAirplaySharpW700Filled;
