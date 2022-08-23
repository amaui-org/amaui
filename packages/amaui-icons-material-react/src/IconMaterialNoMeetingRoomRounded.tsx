import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoMeetingRoomRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoMeetingRoomRounded'
      short_name='NoMeetingRoom'

      {...props}
    >
      <path d="M19 16.15 17 14.15V6H15V12.15L13 10.15V5H7.85L5.85 3H14Q14.425 3 14.713 3.287Q15 3.575 15 4H18Q18.425 4 18.712 4.287Q19 4.575 19 5ZM19.1 21.9 15 17.8V20Q15 20.425 14.713 20.712Q14.425 21 14 21H4Q3.575 21 3.288 20.712Q3 20.425 3 20Q3 19.575 3.288 19.288Q3.575 19 4 19H5V7.8L2.1 4.9Q1.825 4.625 1.825 4.2Q1.825 3.775 2.1 3.5Q2.375 3.225 2.8 3.225Q3.225 3.225 3.5 3.5L20.5 20.5Q20.775 20.775 20.775 21.2Q20.775 21.625 20.5 21.9Q20.225 22.175 19.8 22.175Q19.375 22.175 19.1 21.9ZM7 19H13V15.8L7 9.8ZM10.425 7.575ZM10 12.8Z"/>
    </Icon>
  );
});

IconMaterialNoMeetingRoomRounded.displayName = 'AmauiIconMaterialNoMeetingRoomRounded';

export default IconMaterialNoMeetingRoomRounded;
