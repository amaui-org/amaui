import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDirectionsSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsSharpW100'
      short_name='Directions'

      {...props}
    >
      <path d="M11.975 21.025 2.975 12.025 11.975 3.025 20.975 12.025ZM12 20 20 12 12 4 4 12ZM12 16.1 16.1 12 12 7.9 11.5 8.4 14.75 11.65H7.9V12.35H14.75L11.5 15.6ZM12 12Z"/>
    </Icon>
  );
});

IconMaterialDirectionsSharpW100.displayName = 'AmauiIconMaterialDirectionsSharpW100';

export default IconMaterialDirectionsSharpW100;
