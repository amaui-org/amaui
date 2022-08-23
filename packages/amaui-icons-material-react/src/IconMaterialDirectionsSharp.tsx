import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDirectionsSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsSharp'
      short_name='Directions'

      {...props}
    >
      <path d="M12 22.8 1.2 12 12 1.2 22.8 12ZM12 20 20 12 12 4 4 12ZM12 17 17 12 12 7 10.6 8.4 13.15 11H7V13H13.15L10.6 15.6ZM12 12Z"/>
    </Icon>
  );
});

IconMaterialDirectionsSharp.displayName = 'AmauiIconMaterialDirectionsSharp';

export default IconMaterialDirectionsSharp;
