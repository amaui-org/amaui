import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoMeetingRoomW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoMeetingRoomW100Filled'

      short_name='NoMeetingRoom'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m16.4 13.6-.7-.7V6h-2v4.9L7.15 4.3h6.55v1h2.7Zm3 6.8-5.7-5.7v5H4.3V19h2V7.3L3.6 4.6l.5-.5 15.8 15.8Z"/>
    </Icon>
  );
});

IconMaterialNoMeetingRoomW100Filled.displayName = 'AmauiIconMaterialNoMeetingRoomW100Filled';

export default IconMaterialNoMeetingRoomW100Filled;
