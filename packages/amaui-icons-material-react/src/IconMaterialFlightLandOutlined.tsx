import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlightLandOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlightLandOutlined'
      short_name='FlightLand'

      {...props}
    >
      <path d="M3 21V19H21V21ZM18.85 15.9 3 11.5V6L4.5 6.5L5.2 8.6L10 9.95V2L12 2.5L14.75 11.25L19.75 12.65Q20.325 12.8 20.663 13.262Q21 13.725 21 14.3Q21 15.125 20.325 15.625Q19.65 16.125 18.85 15.9Z"/>
    </Icon>
  )
});

export default IconMaterialFlightLandOutlined;
