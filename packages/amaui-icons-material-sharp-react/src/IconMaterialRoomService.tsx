import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRoomService = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RoomService'

      short_name='RoomService'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 19v-2h20v2Zm1-3v-1q0-3.2 1.963-5.65Q6.925 6.9 10 6.25V4h4v2.25q3.1.65 5.05 3.1Q21 11.8 21 15v1Zm2.05-2h13.9q-.35-2.6-2.325-4.3Q14.65 8 12 8T7.388 9.7Q5.425 11.4 5.05 14ZM12 14Z"/>
    </Icon>
  );
});

IconMaterialRoomService.displayName = 'AmauiIconMaterialRoomService';

export default IconMaterialRoomService;
