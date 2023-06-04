import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestCamMagnetMountW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestCamMagnetMountW100Filled'

      short_name='NestCamMagnetMount'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M22.525 15.9q-.65 0-1.125-.475t-.475-1.125v-4q0-.675.475-1.138.475-.462 1.125-.462h.6v7.2ZM9.25 7.575q1.525 0 2.6 1.075 1.075 1.075 1.075 2.6 0 .75-.275 1.425t-.8 1.225L8.5 17.25l-5.25-5.2 3.35-3.4q.55-.525 1.225-.8t1.425-.275Zm7.725 7.175-.475-.475 1.575-1.575H14.4V12h3.825l-1.7-1.7.475-.45 2.45 2.425Z"/>
    </Icon>
  );
});

IconMaterialNestCamMagnetMountW100Filled.displayName = 'AmauiIconMaterialNestCamMagnetMountW100Filled';

export default IconMaterialNestCamMagnetMountW100Filled;
