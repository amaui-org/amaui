import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoMeetingRoomW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoMeetingRoomW100Filled'

      short_name='AutoMeetingRoom'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M142 884v-28h80V268h296v40h108v318h-28V336h-80v548H142Zm268-280q11 0 19.5-8.5T438 576q0-11-8.5-19.5T410 548q-11 0-19.5 8.5T382 576q0 11 8.5 19.5T410 604Zm298 322 34-76 76-34-76-34-34-76-34 76-76 34 76 34 34 76Z"/>
    </Icon>
  );
});

IconMaterialAutoMeetingRoomW100Filled.displayName = 'AmauiIconMaterialAutoMeetingRoomW100Filled';

export default IconMaterialAutoMeetingRoomW100Filled;
