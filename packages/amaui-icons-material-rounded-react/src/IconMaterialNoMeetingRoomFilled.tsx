import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoMeetingRoomFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoMeetingRoomFilled'

      short_name='NoMeetingRoom'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19 16.15-2-2V6h-3v5.15L5.85 3H13q.425 0 .713.287Q14 3.575 14 4h4q.425 0 .712.287Q19 4.575 19 5Zm.1 5.75L14 16.8V20q0 .425-.287.712Q13.425 21 13 21H4q-.425 0-.712-.288Q3 20.425 3 20t.288-.712Q3.575 19 4 19h1V7.8L2.1 4.9q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l17 17q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275Z"/>
    </Icon>
  );
});

IconMaterialNoMeetingRoomFilled.displayName = 'AmauiIconMaterialNoMeetingRoomFilled';

export default IconMaterialNoMeetingRoomFilled;
