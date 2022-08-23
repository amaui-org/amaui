import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDirectionsOffSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsOffSharp'
      short_name='DirectionsOff'

      {...props}
    >
      <path d="M20.475 23.3 16 18.8 12 22.8 1.2 12 5.2 8 0.675 3.5 2.1 2.075 21.9 21.875ZM14.6 17.4 13.1 15.9 12 17 10.6 15.6 11.675 14.5 10.175 13H7V11H8.175L6.6 9.4L4 12L12 20ZM18.85 15.95 17.45 14.55 20 12 12 4 9.45 6.55 8.05 5.15 12 1.2 22.8 12ZM15.95 13.05 17 12 12 7 10.95 8.05ZM13.45 10.55ZM10.6 13.4Z"/>
    </Icon>
  );
});

IconMaterialDirectionsOffSharp.displayName = 'AmauiIconMaterialDirectionsOffSharp';

export default IconMaterialDirectionsOffSharp;
