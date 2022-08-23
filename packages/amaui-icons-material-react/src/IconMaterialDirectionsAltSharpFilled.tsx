import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDirectionsAltSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsAltSharpFilled'
      short_name='DirectionsAlt'

      {...props}
    >
      <path d="M12 22.8 1.2 12 12 1.2 22.8 12Zm0-5.8 5-5-5-5-1.4 1.4 2.55 2.6H7v2h6.15l-2.55 2.6Z"/>
    </Icon>
  );
});

IconMaterialDirectionsAltSharpFilled.displayName = 'AmauiIconMaterialDirectionsAltSharpFilled';

export default IconMaterialDirectionsAltSharpFilled;
