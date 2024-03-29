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
      <path d="M3 19q-.425 0-.712-.288Q2 18.425 2 18t.288-.712Q2.575 17 3 17h18q.425 0 .712.288.288.287.288.712t-.288.712Q21.425 19 21 19Zm0-3v-1q0-3.2 1.963-5.65Q6.925 6.9 10 6.25V6q0-.825.588-1.412Q11.175 4 12 4t1.413.588Q14 5.175 14 6v.25q3.1.65 5.05 3.1Q21 11.8 21 15v1Zm2.05-2h13.9q-.35-2.6-2.325-4.3Q14.65 8 12 8T7.388 9.7Q5.425 11.4 5.05 14ZM12 14Z"/>
    </Icon>
  );
});

IconMaterialRoomService.displayName = 'AmauiIconMaterialRoomService';

export default IconMaterialRoomService;
