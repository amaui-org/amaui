import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDirectionsAltOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsAltOff'

      short_name='DirectionsAltOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20.475 23.3 16 18.8l-4 4L1.2 12l4-4L.675 3.5 2.1 2.075l19.8 19.8ZM14.6 17.4l-1.5-1.5L12 17l-1.4-1.4 1.075-1.1-1.5-1.5H7v-2h1.175L6.6 9.4 4 12l8 8Zm4.25-1.45-1.4-1.4L20 12l-8-8-2.55 2.55-1.4-1.4L12 1.2 22.8 12Zm-2.9-2.9L17 12l-5-5-1.05 1.05Zm-2.5-2.5ZM10.6 13.4Z"/>
    </Icon>
  );
});

IconMaterialDirectionsAltOff.displayName = 'AmauiIconMaterialDirectionsAltOff';

export default IconMaterialDirectionsAltOff;
