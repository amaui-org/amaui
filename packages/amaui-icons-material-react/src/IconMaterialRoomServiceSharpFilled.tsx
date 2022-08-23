import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRoomServiceSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RoomServiceSharpFilled'
      short_name='RoomService'

      {...props}
    >
      <path d="M2 19V17H22V19ZM3 16V15Q3 11.8 4.963 9.35Q6.925 6.9 10 6.25V4H14V6.25Q17.1 6.9 19.05 9.35Q21 11.8 21 15V16Z"/>
    </Icon>
  );
});

IconMaterialRoomServiceSharpFilled.displayName = 'AmauiIconMaterialRoomServiceSharpFilled';

export default IconMaterialRoomServiceSharpFilled;
