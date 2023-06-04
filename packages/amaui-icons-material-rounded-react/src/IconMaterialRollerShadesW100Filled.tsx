import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRollerShadesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RollerShadesW100Filled'

      short_name='RollerShades'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 19h12v-6.525h-5.65v2.9q.275.125.438.35.162.225.162.525 0 .4-.275.675T12 17.2q-.4 0-.675-.275t-.275-.675q0-.3.163-.525.162-.225.437-.35v-2.9H6Zm-2.35.7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1H5.3V5.8q0-.625.438-1.063Q6.175 4.3 6.8 4.3h10.4q.625 0 1.062.437.438.438.438 1.063V19h1.65q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialRollerShadesW100Filled.displayName = 'AmauiIconMaterialRollerShadesW100Filled';

export default IconMaterialRollerShadesW100Filled;
