import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDirectionsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsW100'

      short_name='Directions'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.65 14.35h.7v-3h4.8v1.575L16.075 11 14.15 9.05v1.6h-5.5Zm3.35 6.6L3.05 12 12 3.05 20.95 12Zm0-.95 8-8-8-8-8 8Zm0-8Z"/>
    </Icon>
  );
});

IconMaterialDirectionsW100.displayName = 'AmauiIconMaterialDirectionsW100';

export default IconMaterialDirectionsW100;
