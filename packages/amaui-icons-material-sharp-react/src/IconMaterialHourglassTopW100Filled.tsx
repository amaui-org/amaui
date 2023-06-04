import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHourglassTopW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HourglassTopW100Filled'

      short_name='HourglassTop'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.4 20h7.2v-3q0-1.7-1-3T12 12.7q-1.6 0-2.6 1.3t-1 3Zm-2.85.7V20H7.7v-3q0-1.8 1.038-3.213Q9.775 12.375 11.5 12q-1.725-.375-2.762-1.788Q7.7 8.8 7.7 7V4H5.55v-.7h12.9V4H16.3v3q0 1.8-1.037 3.212Q14.225 11.625 12.5 12q1.725.375 2.763 1.787Q16.3 15.2 16.3 17v3h2.15v.7Z"/>
    </Icon>
  );
});

IconMaterialHourglassTopW100Filled.displayName = 'AmauiIconMaterialHourglassTopW100Filled';

export default IconMaterialHourglassTopW100Filled;
