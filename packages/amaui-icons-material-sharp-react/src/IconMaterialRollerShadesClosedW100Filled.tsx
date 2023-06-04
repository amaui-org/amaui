import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRollerShadesClosedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RollerShadesClosedW100Filled'

      short_name='RollerShadesClosed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 19.7V19h2V4.3h13.4V19h2v.7h-7.75q0 .4-.275.675T12 20.65q-.4 0-.675-.275t-.275-.675ZM6 19h5.65v-2.525H6Zm6.35 0H18v-2.525h-5.65Z"/>
    </Icon>
  );
});

IconMaterialRollerShadesClosedW100Filled.displayName = 'AmauiIconMaterialRollerShadesClosedW100Filled';

export default IconMaterialRollerShadesClosedW100Filled;
