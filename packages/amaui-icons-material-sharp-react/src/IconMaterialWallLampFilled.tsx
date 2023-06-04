import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWallLampFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WallLampFilled'

      short_name='WallLamp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21v-6h2v6Zm3-2v-2h6v-4H5.65l3-10h8.7l3 10H14v6Z"/>
    </Icon>
  );
});

IconMaterialWallLampFilled.displayName = 'AmauiIconMaterialWallLampFilled';

export default IconMaterialWallLampFilled;
