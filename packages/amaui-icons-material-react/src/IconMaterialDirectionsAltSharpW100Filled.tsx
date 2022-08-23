import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDirectionsAltSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsAltSharpW100Filled'
      short_name='DirectionsAlt'

      {...props}
    >
      <path d="M12 20.95 3.05 12 12 3.05 20.95 12Zm0-4.85 4.1-4.1L12 7.9l-.5.5 3.25 3.25H7.9v.7h6.85L11.5 15.6Z"/>
    </Icon>
  );
});

IconMaterialDirectionsAltSharpW100Filled.displayName = 'AmauiIconMaterialDirectionsAltSharpW100Filled';

export default IconMaterialDirectionsAltSharpW100Filled;
