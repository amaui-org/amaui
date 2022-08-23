import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDirectionsSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsSharpFilled'
      short_name='Directions'

      {...props}
    >
      <path d="M12 22.8 1.2 12 12 1.2 22.8 12ZM12 17 17 12 12 7 10.6 8.4 13.15 11H7V13H13.15L10.6 15.6Z"/>
    </Icon>
  );
});

IconMaterialDirectionsSharpFilled.displayName = 'AmauiIconMaterialDirectionsSharpFilled';

export default IconMaterialDirectionsSharpFilled;
