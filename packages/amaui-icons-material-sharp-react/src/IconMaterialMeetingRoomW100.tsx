import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMeetingRoomW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MeetingRoomW100'

      short_name='MeetingRoom'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.95 19.7V19h2V4.3h7.4v1h2.7V19h2v.7h-2.7V6h-2v13.7ZM7.65 5v14Zm4.7 7q0-.275-.212-.488-.213-.212-.488-.212t-.487.212q-.213.213-.213.488t.213.487q.212.213.487.213t.488-.213q.212-.212.212-.487Zm-4.7 7h6V5h-6Z"/>
    </Icon>
  );
});

IconMaterialMeetingRoomW100.displayName = 'AmauiIconMaterialMeetingRoomW100';

export default IconMaterialMeetingRoomW100;
