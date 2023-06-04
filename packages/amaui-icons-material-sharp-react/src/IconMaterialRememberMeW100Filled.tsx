import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRememberMeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RememberMeW100Filled'

      short_name='RememberMe'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.3 21.7V2.3h11.4v19.4Zm.7-6.35q1.125-.65 2.387-1Q10.65 14 12 14t2.613.35q1.262.35 2.387 1v-10H7Zm5-3q.975 0 1.663-.688.687-.687.687-1.662 0-.975-.687-1.663Q12.975 7.65 12 7.65q-.975 0-1.662.687Q9.65 9.025 9.65 10q0 .975.688 1.662.687.688 1.662.688Z"/>
    </Icon>
  );
});

IconMaterialRememberMeW100Filled.displayName = 'AmauiIconMaterialRememberMeW100Filled';

export default IconMaterialRememberMeW100Filled;
