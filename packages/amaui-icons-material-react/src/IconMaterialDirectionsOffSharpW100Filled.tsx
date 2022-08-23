import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDirectionsOffSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsOffSharpW100Filled'
      short_name='DirectionsOff'

      {...props}
    >
      <path d="M21.3 22.3 15.975 16.975 12 20.95 3.05 12 7.025 8.025 2.25 3.25 2.75 2.75 21.8 21.8ZM12 16.1 13.55 14.55 13.05 14.05 11.5 15.6ZM17.875 15.075 15.325 12.525 15.825 12.025 11.725 7.925 11.225 8.425 8.925 6.125 12 3.05 20.95 12ZM7.9 12.35H11.35L10.65 11.65H7.9Z"/>
    </Icon>
  );
});

IconMaterialDirectionsOffSharpW100Filled.displayName = 'AmauiIconMaterialDirectionsOffSharpW100Filled';

export default IconMaterialDirectionsOffSharpW100Filled;
