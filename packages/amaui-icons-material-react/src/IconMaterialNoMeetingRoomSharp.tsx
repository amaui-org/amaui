import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoMeetingRoomSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoMeetingRoomSharp'
      short_name='NoMeetingRoom'

      {...props}
    >
      <path d="M19 16.15 17 14.15V6H15V12.15L13 10.15V5H7.85L5.85 3H15V4H19ZM19.8 22.6 15 17.8V21H3V19H5V7.8L1.4 4.2L2.8 2.8L21.2 21.2ZM7 19H13V15.8L7 9.8ZM10.425 7.575ZM10 12.8Z"/>
    </Icon>
  );
});

IconMaterialNoMeetingRoomSharp.displayName = 'AmauiIconMaterialNoMeetingRoomSharp';

export default IconMaterialNoMeetingRoomSharp;
