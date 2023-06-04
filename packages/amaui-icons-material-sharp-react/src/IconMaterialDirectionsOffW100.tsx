import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDirectionsOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsOffW100'

      short_name='DirectionsOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m21.3 22.3-5.325-5.325L12 20.95 3.05 12l3.975-3.975L2.25 3.25l.5-.5L21.8 21.8Zm-5.8-5.8-8-8L4 12l8 8Zm2.375-1.425L17.4 14.6 20 12l-8-8-2.6 2.6-.475-.475L12 3.05 20.95 12Zm-4.6-4.6ZM11.5 12.5Zm-2.85 1.85v-3.7h2l.7.7h-2v3Zm6.275-2.225L13.45 10.65h.7v-1.6L16.075 11Z"/>
    </Icon>
  );
});

IconMaterialDirectionsOffW100.displayName = 'AmauiIconMaterialDirectionsOffW100';

export default IconMaterialDirectionsOffW100;
