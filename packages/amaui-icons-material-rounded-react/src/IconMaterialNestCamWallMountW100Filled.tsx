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
      <path d="M5.425 15.95q-.625 0-1.062-.438-.438-.437-.438-1.062v-6q0-.625.438-1.063.437-.437 1.062-.437t1.063.437q.437.438.437 1.063.65-1.225 1.862-1.963Q10 5.75 11.5 5.75q1.05 0 2 .4t1.675 1.125l3.75 3.75q.225.225.338.5.112.275.112.55t-.112.55q-.113.275-.338.5l-5.225 5.25q-.225.225-.5.325t-.55.1q-.275 0-.562-.1-.288-.1-.513-.325l-3.75-3.75q-.275-.275-.5-.563-.225-.287-.4-.612v1q0 .625-.437 1.062-.438.438-1.063.438Z"/>
    </Icon>
  );
});

IconMaterialNestCamWallMountW100Filled.displayName = 'AmauiIconMaterialNestCamWallMountW100Filled';

export default IconMaterialNestCamWallMountW100Filled;
