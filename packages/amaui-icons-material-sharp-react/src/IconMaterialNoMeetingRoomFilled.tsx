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
      <path d="m19 16.15-2-2V6h-2v6.15L5.85 3H15v1h4Zm.8 6.45L15 17.8V21H3v-2h2V7.8L1.4 4.2l1.4-1.4 18.4 18.4Z"/>
    </Icon>
  );
});

IconMaterialNoMeetingRoomFilled.displayName = 'AmauiIconMaterialNoMeetingRoomFilled';

export default IconMaterialNoMeetingRoomFilled;
