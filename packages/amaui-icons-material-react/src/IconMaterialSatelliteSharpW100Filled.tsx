import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSatelliteSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SatelliteSharpW100Filled'
      short_name='Satellite'

      {...props}
    >
      <path d="M6.5 10.8Q8.15 10.525 9.338 9.337Q10.525 8.15 10.8 6.5H10.1Q9.825 7.875 8.85 8.85Q7.875 9.825 6.5 10.1ZM6.5 8.05Q7.075 7.9 7.488 7.487Q7.9 7.075 8.05 6.5H6.5ZM7.95 16.35H16.25L13.7 12.95L11.2 16.05L9.6 14.2ZM4.3 19.7V4.3H19.7V19.7Z"/>
    </Icon>
  );
});

IconMaterialSatelliteSharpW100Filled.displayName = 'AmauiIconMaterialSatelliteSharpW100Filled';

export default IconMaterialSatelliteSharpW100Filled;
