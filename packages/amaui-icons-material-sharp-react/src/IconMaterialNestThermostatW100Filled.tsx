import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestThermostatW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestThermostatW100Filled'

      short_name='NestThermostat'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m333-366 106-187v-34H297v28h111l1 3-101 175 25 15Zm240.872 0Q616-366 640-398.5t24-81.5q0-49-24.34-81.5-24.341-32.5-65.532-32.5Q532-594 508-561.5T484-480q0 49 23.872 81.5 23.873 32.5 66 32.5Zm.128-28q-29 0-45.5-22T512-480q0-41 17.5-63.5T574-566q27 0 44.5 22.5T636-480q0 42-16.5 64T574-394Zm-93.826 262Q408-132 344.442-159.391q-63.559-27.392-110.575-74.348-47.015-46.957-74.441-110.435Q132-407.652 132-479.826q0-72.174 27.391-135.732 27.392-63.559 74.348-110.574 46.957-47.016 110.435-74.442Q407.652-828 479.826-828q72.174 0 135.732 27.391 63.559 27.392 110.574 74.348 47.016 46.957 74.442 110.435Q828-552.348 828-480.174q0 72.174-27.391 135.732-27.392 63.559-74.348 110.575-46.957 47.015-110.435 74.441Q552.348-132 480.174-132Z"/>
    </Icon>
  );
});

IconMaterialNestThermostatW100Filled.displayName = 'AmauiIconMaterialNestThermostatW100Filled';

export default IconMaterialNestThermostatW100Filled;
