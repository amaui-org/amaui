import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestCamWallMountW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestCamWallMountW100Filled'

      short_name='NestCamWallMount'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.425 15.95h-1.5v-9h1.5q.625 0 1.063.437.437.438.437 1.063.65-1.225 1.862-1.963Q10 5.75 11.5 5.75q1.05 0 2 .4t1.675 1.125l4.8 4.8-7.325 7.375-4.825-4.825q-.275-.275-.5-.563-.225-.287-.4-.612v1q0 .625-.437 1.062-.438.438-1.063.438Z"/>
    </Icon>
  );
});

IconMaterialNestCamWallMountW100Filled.displayName = 'AmauiIconMaterialNestCamWallMountW100Filled';

export default IconMaterialNestCamWallMountW100Filled;
