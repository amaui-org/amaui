import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRoomServiceW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RoomServiceW100Filled'

      short_name='RoomService'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.6 16.9v-.7h16.8v.7Zm.7-2.2q0-2.875 2.025-4.938Q8.35 7.7 11.3 7.35v-1.2h1.4v1.2q2.95.35 4.975 2.412Q19.7 11.825 19.7 14.7Z"/>
    </Icon>
  );
});

IconMaterialRoomServiceW100Filled.displayName = 'AmauiIconMaterialRoomServiceW100Filled';

export default IconMaterialRoomServiceW100Filled;
