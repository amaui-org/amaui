import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWifiChannelW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiChannelW100Filled'

      short_name='WifiChannel'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.725 20.35q.425-2.65.925-4.813.5-2.162 1.05-3.687t1.138-2.363Q7.425 8.65 8 8.65q1.025 0 1.988 2.362.962 2.363 1.787 6.513.3-3.4.725-5.988.425-2.587.963-4.337.537-1.75 1.174-2.65.638-.9 1.363-.9.825 0 1.538 1.125.712 1.125 1.274 3.275.563 2.15.951 5.25.387 3.1.562 7.05h-.8Q19 18.075 17.9 16.212 16.8 14.35 16 14.35q-.8 0-1.875 1.825t-1.65 4.175h-.9q-.325-2.15-.775-4.138-.45-1.987-.95-3.512-.5-1.525-.987-2.438Q8.375 9.35 8 9.35t-.862.912q-.488.913-.988 2.438-.5 1.525-.95 3.512-.45 1.988-.775 4.138Zm8.725-2.25q.8-2.125 1.738-3.288.937-1.162 1.812-1.162t1.825 1.175Q18.775 16 19.55 18.1q-.45-6.025-1.437-9.888Q17.125 4.35 16 4.35q-1.1 0-2.1 3.875T12.45 18.1Z"/>
    </Icon>
  );
});

IconMaterialWifiChannelW100Filled.displayName = 'AmauiIconMaterialWifiChannelW100Filled';

export default IconMaterialWifiChannelW100Filled;
