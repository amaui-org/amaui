import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAirplaySharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirplaySharpW700'
      short_name='Airplay'

      {...props}
    >
      <path d="M6 21.85 12 15.85 18 21.85ZM1.15 19.85V2.15H22.85V19.85H17V16.7H19.7V5.3H4.3V16.7H7V19.85ZM12 11Z"/>
    </Icon>
  )
});

export default IconMaterialAirplaySharpW700;
