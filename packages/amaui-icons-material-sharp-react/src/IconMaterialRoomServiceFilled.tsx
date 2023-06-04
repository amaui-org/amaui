import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRoomServiceFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RoomServiceFilled'

      short_name='RoomService'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 19v-2h20v2Zm1-3v-1q0-3.2 1.963-5.65Q6.925 6.9 10 6.25V4h4v2.25q3.1.65 5.05 3.1Q21 11.8 21 15v1Z"/>
    </Icon>
  );
});

IconMaterialRoomServiceFilled.displayName = 'AmauiIconMaterialRoomServiceFilled';

export default IconMaterialRoomServiceFilled;
