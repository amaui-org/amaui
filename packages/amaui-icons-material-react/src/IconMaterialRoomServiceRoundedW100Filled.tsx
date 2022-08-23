import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRoomServiceRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RoomServiceRoundedW100Filled'
      short_name='RoomService'

      {...props}
    >
      <path d="M3.95 16.9Q3.8 16.9 3.7 16.8Q3.6 16.7 3.6 16.55Q3.6 16.4 3.7 16.3Q3.8 16.2 3.95 16.2H20.05Q20.2 16.2 20.3 16.3Q20.4 16.4 20.4 16.55Q20.4 16.7 20.3 16.8Q20.2 16.9 20.05 16.9ZM4.3 14.7Q4.3 11.825 6.325 9.762Q8.35 7.7 11.3 7.35V6.85Q11.3 6.575 11.513 6.362Q11.725 6.15 12 6.15Q12.275 6.15 12.488 6.362Q12.7 6.575 12.7 6.85V7.35Q15.65 7.7 17.675 9.762Q19.7 11.825 19.7 14.7Z"/>
    </Icon>
  );
});

IconMaterialRoomServiceRoundedW100Filled.displayName = 'AmauiIconMaterialRoomServiceRoundedW100Filled';

export default IconMaterialRoomServiceRoundedW100Filled;
