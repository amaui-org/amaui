import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMeetingRoomSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MeetingRoomSharpFilled'
      short_name='MeetingRoom'

      {...props}
    >
      <path d="M3 21V19H5V3H15V4H19V19H21V21H17V6H15V21ZM12 12Q12 11.575 11.713 11.287Q11.425 11 11 11Q10.575 11 10.288 11.287Q10 11.575 10 12Q10 12.425 10.288 12.712Q10.575 13 11 13Q11.425 13 11.713 12.712Q12 12.425 12 12Z"/>
    </Icon>
  );
});

IconMaterialMeetingRoomSharpFilled.displayName = 'AmauiIconMaterialMeetingRoomSharpFilled';

export default IconMaterialMeetingRoomSharpFilled;
