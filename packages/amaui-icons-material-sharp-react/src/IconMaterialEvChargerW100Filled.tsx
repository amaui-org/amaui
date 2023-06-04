import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEvChargerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EvChargerW100Filled'

      short_name='EvCharger'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m8.5 18.675 2.5-4H9.5v-3l-2.5 4h1.5ZM6 10.65h6V5H6Zm-.7 9.05V4.3h7.4v7.2h2.4V19h3.05V8.85h-1.125v-2.2h.375v-1h.7v1h.8v-1h.7v1h.375v2.2H18.85V19.7H14.4v-7.5h-1.7v7.5Z"/>
    </Icon>
  );
});

IconMaterialEvChargerW100Filled.displayName = 'AmauiIconMaterialEvChargerW100Filled';

export default IconMaterialEvChargerW100Filled;
