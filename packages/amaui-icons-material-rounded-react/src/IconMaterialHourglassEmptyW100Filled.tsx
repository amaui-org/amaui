import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHourglassEmptyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HourglassEmptyW100Filled'

      short_name='HourglassEmpty'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.4 20h7.2v-3q0-1.7-1-3T12 12.7q-1.6 0-2.6 1.3t-1 3Zm3.6-8.7q1.6 0 2.6-1.3t1-3V4H8.4v3q0 1.7 1 3t2.6 1.3Zm6.1 9.4H5.9q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h1.8v-3q0-1.8 1.038-3.213Q9.775 12.375 11.5 12q-1.725-.375-2.762-1.788Q7.7 8.8 7.7 7V4H5.9q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h12.2q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-1.8v3q0 1.8-1.037 3.212Q14.225 11.625 12.5 12q1.725.375 2.763 1.787Q16.3 15.2 16.3 17v3h1.8q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialHourglassEmptyW100Filled.displayName = 'AmauiIconMaterialHourglassEmptyW100Filled';

export default IconMaterialHourglassEmptyW100Filled;
