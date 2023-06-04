import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWallLamp = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WallLamp'

      short_name='WallLamp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21v-6h2v6Zm5.35-10h9.3l-1.8-6h-5.7Zm0 0h9.3ZM6 19v-2h6v-4H5.65l3-10h8.7l3 10H14v6Z"/>
    </Icon>
  );
});

IconMaterialWallLamp.displayName = 'AmauiIconMaterialWallLamp';

export default IconMaterialWallLamp;
