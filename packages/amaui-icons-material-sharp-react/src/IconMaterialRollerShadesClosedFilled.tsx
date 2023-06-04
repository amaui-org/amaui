import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRollerShadesClosedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RollerShadesClosedFilled'

      short_name='RollerShadesClosed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 21v-2h2V3h16v16h2v2h-8.25q0 .725-.512 1.238-.513.512-1.238.512t-1.238-.512q-.512-.513-.512-1.238Zm4-2h5v-2H6Zm7 0h5v-2h-5Z"/>
    </Icon>
  );
});

IconMaterialRollerShadesClosedFilled.displayName = 'AmauiIconMaterialRollerShadesClosedFilled';

export default IconMaterialRollerShadesClosedFilled;
