import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRollerShadesClosedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RollerShadesClosedW100'

      short_name='RollerShadesClosed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.65q-.4 0-.675-.275t-.275-.675h-7.4q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1H5.3V5.8q0-.625.438-1.063Q6.175 4.3 6.8 4.3h10.4q.625 0 1.062.437.438.438.438 1.063V19h1.65q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-7.4q0 .4-.275.675T12 20.65Zm-6-4.875h12V5.8q0-.35-.225-.575Q17.55 5 17.2 5H6.8q-.35 0-.575.225Q6 5.45 6 5.8ZM6 19h5.65v-2.525H6Zm6.35 0H18v-2.525h-5.65ZM6.8 5H18 6 6.8Z"/>
    </Icon>
  );
});

IconMaterialRollerShadesClosedW100.displayName = 'AmauiIconMaterialRollerShadesClosedW100';

export default IconMaterialRollerShadesClosedW100;
