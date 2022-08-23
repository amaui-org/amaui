import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRoomServiceSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RoomServiceSharp'
      short_name='RoomService'

      {...props}
    >
      <path d="M2 19V17H22V19ZM3 16V15Q3 11.8 4.963 9.35Q6.925 6.9 10 6.25V4H14V6.25Q17.1 6.9 19.05 9.35Q21 11.8 21 15V16ZM5.05 14H18.95Q18.6 11.4 16.625 9.7Q14.65 8 12 8Q9.35 8 7.388 9.7Q5.425 11.4 5.05 14ZM12 14Q12 14 12 14Q12 14 12 14Q12 14 12 14Q12 14 12 14Z"/>
    </Icon>
  );
});

IconMaterialRoomServiceSharp.displayName = 'AmauiIconMaterialRoomServiceSharp';

export default IconMaterialRoomServiceSharp;
