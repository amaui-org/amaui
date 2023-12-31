import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBottomRightClickW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BottomRightClickW100Filled'

      short_name='BottomRightClick'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M185-172q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h543q14 0 23-9t9-23v-541q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v541q0 24.75-17.625 42.375T728-172H185Zm415-134q-23 0-38.5-15.5T546-360q0-23 15.5-38.5T600-414q23 0 38.5 15.5T654-360q0 23-15.5 38.5T600-306ZM266-480q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h166L193-748q-4-4-4-9.5t4-9.5q4-4 9.5-4t9.5 4l240 239v-166q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v184q0 12.75-8.625 21.375T450-480H266Z"/>
    </Icon>
  );
});

IconMaterialBottomRightClickW100Filled.displayName = 'AmauiIconMaterialBottomRightClickW100Filled';

export default IconMaterialBottomRightClickW100Filled;
