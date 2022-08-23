import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNearbyOffSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NearbyOffSharpW100Filled'
      short_name='NearbyOff'

      {...props}
    >
      <path d="M11.975 20.475 3.5 12 7.25 8.25 3.35 4.35 3.85 3.85 20.1 20.1 19.6 20.6 15.75 16.75ZM11.975 19.225 15.1 16.1 13.1 14.1 12 15.25 8.75 12 9.85 10.85 7.9 8.9 4.775 11.975ZM17.65 14.8 17 14.2 19.175 11.975 11.975 4.775 9.8 6.95 9.15 6.35 11.95 3.475 20.5 11.95ZM15 12.2 11.75 8.95 12 8.75 15.25 12Z"/>
    </Icon>
  );
});

IconMaterialNearbyOffSharpW100Filled.displayName = 'AmauiIconMaterialNearbyOffSharpW100Filled';

export default IconMaterialNearbyOffSharpW100Filled;
