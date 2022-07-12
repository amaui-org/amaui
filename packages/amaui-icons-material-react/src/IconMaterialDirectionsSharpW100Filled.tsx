import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDirectionsSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsSharpW100Filled'
      short_name='Directions'

      {...props}
    >
      <path d="M12 21.025 3 12.025 12 3.025 21 12.025ZM12 16.1 16.1 12 12 7.9 11.5 8.4 14.75 11.65H7.9V12.35H14.75L11.5 15.6Z"/>
    </Icon>
  )
});

export default IconMaterialDirectionsSharpW100Filled;
