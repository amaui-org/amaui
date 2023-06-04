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
      <path d="M6 11.775h12V5.8q0-.35-.225-.575Q17.55 5 17.2 5H6.8q-.35 0-.575.225Q6 5.45 6 5.8ZM6 19h12v-6.525h-5.65v2.9q.275.125.438.35.162.225.162.525 0 .4-.275.675T12 17.2q-.4 0-.675-.275t-.275-.675q0-.3.163-.525.162-.225.437-.35v-2.9H6Zm.8-14H18 6 6.8ZM3.65 19.7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1H5.3V5.8q0-.625.438-1.063Q6.175 4.3 6.8 4.3h10.4q.625 0 1.062.437.438.438.438 1.063V19h1.65q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialRollerShadesW100.displayName = 'AmauiIconMaterialRollerShadesW100';

export default IconMaterialRollerShadesW100;
