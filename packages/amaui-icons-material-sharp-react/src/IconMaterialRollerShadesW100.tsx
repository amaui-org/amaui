import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRollerShadesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RollerShadesW100'

      short_name='RollerShades'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 19.7V19h2V4.3h13.4V19h2v.7ZM6 11.775h12V5H6ZM6 19h12v-6.525h-5.65v2.9q.275.125.438.35.162.225.162.525 0 .4-.275.675T12 17.2q-.4 0-.675-.275t-.275-.675q0-.3.163-.525.162-.225.437-.35v-2.9H6ZM6 5h12H6Z"/>
    </Icon>
  );
});

IconMaterialRollerShadesW100.displayName = 'AmauiIconMaterialRollerShadesW100';

export default IconMaterialRollerShadesW100;
