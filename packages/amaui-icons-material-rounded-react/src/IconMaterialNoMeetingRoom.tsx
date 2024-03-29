import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoMeetingRoom = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoMeetingRoom'

      short_name='NoMeetingRoom'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19 16.15-2-2V6h-2v6.15l-2-2V5H7.85l-2-2H14q.425 0 .713.287Q15 3.575 15 4h3q.425 0 .712.287Q19 4.575 19 5Zm.1 5.75L15 17.8V20q0 .425-.287.712Q14.425 21 14 21H4q-.425 0-.712-.288Q3 20.425 3 20t.288-.712Q3.575 19 4 19h1V7.8L2.1 4.9q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l17 17q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275ZM7 19h6v-3.2l-6-6Zm3.425-11.425ZM10 12.8Z"/>
    </Icon>
  );
});

IconMaterialNoMeetingRoom.displayName = 'AmauiIconMaterialNoMeetingRoom';

export default IconMaterialNoMeetingRoom;
