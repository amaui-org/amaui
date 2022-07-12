import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChargingStationSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChargingStationSharpW700Filled'
      short_name='ChargingStation'

      {...props}
    >
      <path d="M11.5 16.975V13H9.525L12.5 7.025V11H14.475ZM4.225 23.775V0.225H19.775V23.775ZM7.375 17.625H16.625V6.375H7.375Z"/>
    </Icon>
  )
});

export default IconMaterialChargingStationSharpW700Filled;
