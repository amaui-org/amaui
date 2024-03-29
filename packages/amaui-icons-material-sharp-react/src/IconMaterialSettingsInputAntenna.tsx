import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsInputAntenna = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsInputAntenna'

      short_name='SettingsInputAntenna'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1 12q0-2.3.863-4.3.862-2 2.362-3.488 1.5-1.487 3.5-2.35Q9.725 1 12 1q2.275 0 4.275.862 2 .863 3.5 2.35 1.5 1.488 2.363 3.488Q23 9.7 23 12h-2q0-1.875-.712-3.513-.713-1.637-1.938-2.862T15.488 3.7Q13.85 3 12 3t-3.488.7q-1.637.7-2.862 1.925T3.712 8.487Q3 10.125 3 12Zm4 0q0-2.95 2.05-4.975Q9.1 5 12 5q2.9 0 4.95 2.025Q19 9.05 19 12h-2q0-2.075-1.462-3.538Q14.075 7 12 7 9.925 7 8.463 8.462 7 9.925 7 12Zm4 10.4L7.6 21l3.4-3.4v-3.3q-.675-.3-1.087-.925Q9.5 12.75 9.5 12q0-1.05.725-1.775Q10.95 9.5 12 9.5q1.05 0 1.775.725.725.725.725 1.775 0 .75-.412 1.375Q13.675 14 13 14.3v3.3l3.4 3.4-1.4 1.4-3-3Z"/>
    </Icon>
  );
});

IconMaterialSettingsInputAntenna.displayName = 'AmauiIconMaterialSettingsInputAntenna';

export default IconMaterialSettingsInputAntenna;
