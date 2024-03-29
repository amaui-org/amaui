import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMeetingRoomFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MeetingRoomFilled'

      short_name='MeetingRoom'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 21q-.425 0-.712-.288Q3 20.425 3 20t.288-.712Q3.575 19 4 19h1V4q0-.425.287-.713Q5.575 3 6 3h7q.425 0 .713.287Q14 3.575 14 4h4q.425 0 .712.287Q19 4.575 19 5v14h1q.425 0 .712.288.288.287.288.712t-.288.712Q20.425 21 20 21h-2q-.425 0-.712-.288Q17 20.425 17 20V6h-3v14q0 .425-.287.712Q13.425 21 13 21Zm8-9q0-.425-.287-.713Q11.425 11 11 11t-.712.287Q10 11.575 10 12t.288.712Q10.575 13 11 13t.713-.288Q12 12.425 12 12Z"/>
    </Icon>
  );
});

IconMaterialMeetingRoomFilled.displayName = 'AmauiIconMaterialMeetingRoomFilled';

export default IconMaterialMeetingRoomFilled;
