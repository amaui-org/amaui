import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWallLampW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WallLampW100Filled'

      short_name='WallLamp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.95 19.7V15h.7v4.7Zm2.7-2V17h6v-4H7.4l2.225-7.4h6.75L18.6 13h-5.25v4.7Z"/>
    </Icon>
  );
});

IconMaterialWallLampW100Filled.displayName = 'AmauiIconMaterialWallLampW100Filled';

export default IconMaterialWallLampW100Filled;
