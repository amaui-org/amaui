import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAirplaySharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirplaySharp'
      short_name='Airplay'

      {...props}
    >
      <path d="M6 21 12 15 18 21ZM2 19V3H22V19H17V17H20V5H4V17H7V19ZM12 11Z"/>
    </Icon>
  );
});

IconMaterialAirplaySharp.displayName = 'AmauiIconMaterialAirplaySharp';

export default IconMaterialAirplaySharp;
