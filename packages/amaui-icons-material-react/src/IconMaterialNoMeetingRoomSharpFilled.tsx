import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoMeetingRoomSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoMeetingRoomSharpFilled'
      short_name='NoMeetingRoom'

      {...props}
    >
      <path d="M19 16.15 17 14.15V6H15V12.15L5.85 3H15V4H19ZM19.8 22.6 15 17.8V21H3V19H5V7.8L1.4 4.2L2.8 2.8L21.2 21.2Z"/>
    </Icon>
  )
});

export default IconMaterialNoMeetingRoomSharpFilled;
