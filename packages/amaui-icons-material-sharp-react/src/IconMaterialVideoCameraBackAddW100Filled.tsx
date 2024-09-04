import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideoCameraBackAddW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoCameraBackAddW100Filled'

      short_name='VideoCameraBackAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M157-212v-272q22 12 45.74 18 23.75 6 48.26 6 80.51 0 137.26-56.74Q445-573.49 445-654q0-24.51-6-48.26Q433-726 421-748h272v248l110-110v260L693-460v248H157Zm80-348v-80h-80v-28h80v-80h28v80h80v28h-80v80h-28Zm22 226h332L489-470 389-346l-64-74-66 86Z"/>
    </Icon>
  );
});

IconMaterialVideoCameraBackAddW100Filled.displayName = 'AmauiIconMaterialVideoCameraBackAddW100Filled';

export default IconMaterialVideoCameraBackAddW100Filled;
