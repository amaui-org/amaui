import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMeetingRoomRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MeetingRoomRoundedW100'
      short_name='MeetingRoom'

      {...props}
    >
      <path d="M5.3 19.7Q5.15 19.7 5.05 19.6Q4.95 19.5 4.95 19.35Q4.95 19.2 5.05 19.1Q5.15 19 5.3 19H6.95V5.05Q6.95 4.725 7.162 4.512Q7.375 4.3 7.7 4.3H13.6Q13.925 4.3 14.138 4.512Q14.35 4.725 14.35 5.05V5.3H16.3Q16.625 5.3 16.837 5.512Q17.05 5.725 17.05 6.05V19H18.7Q18.85 19 18.95 19.1Q19.05 19.2 19.05 19.35Q19.05 19.5 18.95 19.6Q18.85 19.7 18.7 19.7H17.1Q16.775 19.7 16.562 19.487Q16.35 19.275 16.35 18.95V6H14.35V18.95Q14.35 19.275 14.138 19.487Q13.925 19.7 13.6 19.7ZM7.65 5V19ZM12.35 12Q12.35 11.725 12.138 11.512Q11.925 11.3 11.65 11.3Q11.375 11.3 11.163 11.512Q10.95 11.725 10.95 12Q10.95 12.275 11.163 12.487Q11.375 12.7 11.65 12.7Q11.925 12.7 12.138 12.487Q12.35 12.275 12.35 12ZM7.65 19H13.65V5H7.65Z"/>
    </Icon>
  );
});

IconMaterialMeetingRoomRoundedW100.displayName = 'AmauiIconMaterialMeetingRoomRoundedW100';

export default IconMaterialMeetingRoomRoundedW100;
