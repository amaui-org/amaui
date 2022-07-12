import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDirectionsSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsSharpW700'
      short_name='Directions'

      {...props}
    >
      <path d="M12 24.025 -0.025 12 12 -0.025 24.025 12ZM12 19.575 19.575 12 12 4.425 4.425 12ZM12 17 17 12 12 7 10.6 8.4 13.15 11H7V13H13.15L10.6 15.6ZM12 12Z"/>
    </Icon>
  )
});

export default IconMaterialDirectionsSharpW700;
