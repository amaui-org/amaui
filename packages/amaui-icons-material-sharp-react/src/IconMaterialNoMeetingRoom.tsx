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
      <path d="m19 16.15-2-2V6h-2v6.15l-2-2V5H7.85l-2-2H15v1h4Zm.8 6.45L15 17.8V21H3v-2h2V7.8L1.4 4.2l1.4-1.4 18.4 18.4ZM7 19h6v-3.2l-6-6Zm3.425-11.425ZM10 12.8Z"/>
    </Icon>
  );
});

IconMaterialNoMeetingRoom.displayName = 'AmauiIconMaterialNoMeetingRoom';

export default IconMaterialNoMeetingRoom;
