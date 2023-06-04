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
      <path d="M5.3 19.7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h1.65V5.05q0-.325.212-.538.213-.212.538-.212h5.9q.325 0 .538.212.212.213.212.538v.25h1.95q.325 0 .537.212.213.213.213.538V19h1.65q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-1.6q-.325 0-.538-.213-.212-.212-.212-.537V6h-2v12.95q0 .325-.212.537-.213.213-.538.213ZM7.65 5v14Zm4.7 7q0-.275-.212-.488-.213-.212-.488-.212t-.487.212q-.213.213-.213.488t.213.487q.212.213.487.213t.488-.213q.212-.212.212-.487Zm-4.7 7h6V5h-6Z"/>
    </Icon>
  );
});

IconMaterialMeetingRoomW100.displayName = 'AmauiIconMaterialMeetingRoomW100';

export default IconMaterialMeetingRoomW100;
