import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRoomServiceW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RoomServiceW100'

      short_name='RoomService'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.6 16.9v-.7h16.8v.7Zm.7-2.2q0-2.875 2.025-4.938Q8.35 7.7 11.3 7.35v-1.2h1.4v1.2q2.95.35 4.975 2.412Q19.7 11.825 19.7 14.7Zm.775-.7h13.85q-.2-2.4-2.225-4.175T12 8.05q-2.675 0-4.7 1.775Q5.275 11.6 5.075 14ZM12 14Z"/>
    </Icon>
  );
});

IconMaterialRoomServiceW100.displayName = 'AmauiIconMaterialRoomServiceW100';

export default IconMaterialRoomServiceW100;
