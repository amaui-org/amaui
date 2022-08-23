import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAirplaySharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirplaySharpW100Filled'
      short_name='Airplay'

      {...props}
    >
      <path d="M8.55 19.7 12 16.25 15.45 19.7ZM3.3 17.7V4.3H20.7V17.7H16.7L12 13L7.3 17.7Z"/>
    </Icon>
  );
});

IconMaterialAirplaySharpW100Filled.displayName = 'AmauiIconMaterialAirplaySharpW100Filled';

export default IconMaterialAirplaySharpW100Filled;
