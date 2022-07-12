import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDirectionsAltSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsAltSharpW700Filled'
      short_name='DirectionsAlt'

      {...props}
    >
      <path d="M12 24.025-.025 12 12-.025 24.025 12ZM12 17l5-5-5-5-1.4 1.4 2.55 2.6H7v2h6.15l-2.55 2.6Z"/>
    </Icon>
  )
});

export default IconMaterialDirectionsAltSharpW700Filled;
