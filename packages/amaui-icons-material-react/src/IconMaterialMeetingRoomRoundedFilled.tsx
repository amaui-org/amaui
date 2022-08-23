import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMeetingRoomRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MeetingRoomRoundedFilled'
      short_name='MeetingRoom'

      {...props}
    >
      <path d="M4 21Q3.575 21 3.288 20.712Q3 20.425 3 20Q3 19.575 3.288 19.288Q3.575 19 4 19H5V4Q5 3.575 5.287 3.287Q5.575 3 6 3H13Q13.425 3 13.713 3.287Q14 3.575 14 4H18Q18.425 4 18.712 4.287Q19 4.575 19 5V19H20Q20.425 19 20.712 19.288Q21 19.575 21 20Q21 20.425 20.712 20.712Q20.425 21 20 21H18Q17.575 21 17.288 20.712Q17 20.425 17 20V6H14V20Q14 20.425 13.713 20.712Q13.425 21 13 21ZM12 12Q12 11.575 11.713 11.287Q11.425 11 11 11Q10.575 11 10.288 11.287Q10 11.575 10 12Q10 12.425 10.288 12.712Q10.575 13 11 13Q11.425 13 11.713 12.712Q12 12.425 12 12Z"/>
    </Icon>
  );
});

IconMaterialMeetingRoomRoundedFilled.displayName = 'AmauiIconMaterialMeetingRoomRoundedFilled';

export default IconMaterialMeetingRoomRoundedFilled;
