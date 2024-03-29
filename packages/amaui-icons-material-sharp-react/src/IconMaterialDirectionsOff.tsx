import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDirectionsOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsOff'

      short_name='DirectionsOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20.475 23.3 16 18.8l-4 4L1.2 12l4-4L.675 3.5 2.1 2.075l19.8 19.8ZM14.6 17.4l-8-8L4 12l8 8Zm4.25-1.45-1.4-1.4L20 12l-8-8-2.55 2.55-1.4-1.4L12 1.2 22.8 12Zm-5.4-5.4ZM10.6 13.4ZM8 15v-5h2.025l2 2H10v3Zm7.45-2.45L12.9 10h.6V7.5L17 11Z"/>
    </Icon>
  );
});

IconMaterialDirectionsOff.displayName = 'AmauiIconMaterialDirectionsOff';

export default IconMaterialDirectionsOff;
