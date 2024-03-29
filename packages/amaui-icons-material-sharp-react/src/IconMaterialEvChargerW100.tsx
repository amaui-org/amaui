import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEvChargerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EvChargerW100'

      short_name='EvCharger'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m8.7 17.85 1.55-3h-.925v-2.375l-1.575 3h.95ZM6 10.65h6V5H6ZM6 19h6v-7.65H6Zm-.7.7V4.3h7.4v7.2h2.4V19h3.05V8.85h-1.125v-2.2h.375v-1h.7v1h.8v-1h.7v1h.375v2.2H18.85V19.7H14.4v-7.5h-1.7v7.5ZM12 19H6h6Z"/>
    </Icon>
  );
});

IconMaterialEvChargerW100.displayName = 'AmauiIconMaterialEvChargerW100';

export default IconMaterialEvChargerW100;
