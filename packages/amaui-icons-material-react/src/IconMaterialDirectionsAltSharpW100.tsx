import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDirectionsAltSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsAltSharpW100'
      short_name='DirectionsAlt'

      {...props}
    >
      <path d="M12 20.95 3.05 12 12 3.05 20.95 12Zm0-.95 8-8-8-8-8 8Zm0-3.9 4.1-4.1L12 7.9l-.5.5 3.25 3.25H7.9v.7h6.85L11.5 15.6Zm0-4.1Z"/>
    </Icon>
  )
});

export default IconMaterialDirectionsAltSharpW100;
