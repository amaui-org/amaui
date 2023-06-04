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
      <path d="M4.3 19.7q-.15 0-.25-.1t-.1-.25v-4q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v4q0 .15-.1.25t-.25.1Zm4.05-7.4h9.3l-1.8-6h-5.7Zm0 0h9.3ZM7 17.7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25T7 17h4q.675 0 1.163-.488.487-.487.487-1.162V13H8.4q-.375 0-.6-.312-.225-.313-.1-.663l1.75-5.9q.075-.25.275-.388.2-.137.45-.137h5.65q.25 0 .45.137.2.138.275.388l1.75 5.9q.125.35-.1.663-.225.312-.6.312h-4.25v2.35q0 .975-.687 1.662-.688.688-1.663.688Z"/>
    </Icon>
  );
});

IconMaterialWallLampW100.displayName = 'AmauiIconMaterialWallLampW100';

export default IconMaterialWallLampW100;
