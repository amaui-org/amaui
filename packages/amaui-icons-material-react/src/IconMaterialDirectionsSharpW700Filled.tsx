import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDirectionsSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsSharpW700Filled'
      short_name='Directions'

      {...props}
    >
      <path d="M12 24.025 -0.025 12 12 -0.025 24.025 12ZM12 17 17 12 12 7 10.6 8.4 13.15 11H7V13H13.15L10.6 15.6Z"/>
    </Icon>
  )
});

export default IconMaterialDirectionsSharpW700Filled;
