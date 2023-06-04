import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWallLampW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WallLampW100'

      short_name='WallLamp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.95 19.7V15h.7v4.7Zm4.4-7.4h9.3l-1.8-6h-5.7Zm0 0h9.3Zm-1.7 5.4V17h6v-4H7.4l2.225-7.4h6.75L18.6 13h-5.25v4.7Z"/>
    </Icon>
  );
});

IconMaterialWallLampW100.displayName = 'AmauiIconMaterialWallLampW100';

export default IconMaterialWallLampW100;
