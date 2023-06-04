import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoMeetingRoomW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoMeetingRoomW100'

      short_name='AutoMeetingRoom'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M142 884v-28h80V268h296v40h108v318h-28V336h-80v548H142Zm268-280q11 0 19.5-8.5T438 576q0-11-8.5-19.5T410 548q-11 0-19.5 8.5T382 576q0 11 8.5 19.5T410 604ZM250 856h240V296H250v560Zm458 70 34-76 76-34-76-34-34-76-34 76-76 34 76 34 34 76Zm-458-70V296v560Z"/>
    </Icon>
  );
});

IconMaterialAutoMeetingRoomW100.displayName = 'AmauiIconMaterialAutoMeetingRoomW100';

export default IconMaterialAutoMeetingRoomW100;
