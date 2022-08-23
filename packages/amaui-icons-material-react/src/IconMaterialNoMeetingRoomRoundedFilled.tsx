import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoMeetingRoomRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoMeetingRoomRoundedFilled'
      short_name='NoMeetingRoom'

      {...props}
    >
      <path d="M19 16.15 17 14.15V6H14V11.15L5.85 3H13Q13.425 3 13.713 3.287Q14 3.575 14 4H18Q18.425 4 18.712 4.287Q19 4.575 19 5ZM19.1 21.9 14 16.8V20Q14 20.425 13.713 20.712Q13.425 21 13 21H4Q3.575 21 3.288 20.712Q3 20.425 3 20Q3 19.575 3.288 19.288Q3.575 19 4 19H5V7.8L2.1 4.9Q1.825 4.625 1.825 4.2Q1.825 3.775 2.1 3.5Q2.375 3.225 2.8 3.225Q3.225 3.225 3.5 3.5L20.5 20.5Q20.775 20.775 20.775 21.2Q20.775 21.625 20.5 21.9Q20.225 22.175 19.8 22.175Q19.375 22.175 19.1 21.9Z"/>
    </Icon>
  );
});

IconMaterialNoMeetingRoomRoundedFilled.displayName = 'AmauiIconMaterialNoMeetingRoomRoundedFilled';

export default IconMaterialNoMeetingRoomRoundedFilled;
