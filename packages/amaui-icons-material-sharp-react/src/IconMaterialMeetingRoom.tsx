import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMeetingRoom = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MeetingRoom'

      short_name='MeetingRoom'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21v-2h2V3h10v1h4v15h2v2h-4V6h-2v15ZM7 5v14Zm5 7q0-.425-.287-.713Q11.425 11 11 11t-.712.287Q10 11.575 10 12t.288.712Q10.575 13 11 13t.713-.288Q12 12.425 12 12Zm-5 7h6V5H7Z"/>
    </Icon>
  );
});

IconMaterialMeetingRoom.displayName = 'AmauiIconMaterialMeetingRoom';

export default IconMaterialMeetingRoom;
