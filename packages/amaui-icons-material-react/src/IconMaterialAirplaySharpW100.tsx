import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAirplaySharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirplaySharpW100'
      short_name='Airplay'

      {...props}
    >
      <path d="M8.55 19.7 12 16.25 15.45 19.7ZM3.3 17.7V4.3H20.7V17.7H16V17H20V5H4V17H8V17.7ZM12 11Z"/>
    </Icon>
  )
});

export default IconMaterialAirplaySharpW100;
