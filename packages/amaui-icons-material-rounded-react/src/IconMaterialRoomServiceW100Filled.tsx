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
      <path d="M3.95 16.9q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h16.1q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm.35-2.2q0-2.875 2.025-4.938Q8.35 7.7 11.3 7.35v-.5q0-.275.213-.488.212-.212.487-.212t.488.212q.212.213.212.488v.5q2.95.35 4.975 2.412Q19.7 11.825 19.7 14.7Z"/>
    </Icon>
  );
});

IconMaterialRoomServiceW100Filled.displayName = 'AmauiIconMaterialRoomServiceW100Filled';

export default IconMaterialRoomServiceW100Filled;
