import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMeetingRoomSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MeetingRoomSharpW100'
      short_name='MeetingRoom'

      {...props}
    >
      <path d="M4.95 19.7V19H6.95V4.3H14.35V5.3H17.05V19H19.05V19.7H16.35V6H14.35V19.7ZM7.65 5V19ZM12.35 12Q12.35 11.725 12.138 11.512Q11.925 11.3 11.65 11.3Q11.375 11.3 11.163 11.512Q10.95 11.725 10.95 12Q10.95 12.275 11.163 12.487Q11.375 12.7 11.65 12.7Q11.925 12.7 12.138 12.487Q12.35 12.275 12.35 12ZM7.65 19H13.65V5H7.65Z"/>
    </Icon>
  );
});

IconMaterialMeetingRoomSharpW100.displayName = 'AmauiIconMaterialMeetingRoomSharpW100';

export default IconMaterialMeetingRoomSharpW100;
