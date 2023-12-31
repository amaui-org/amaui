import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOrdersW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OrdersW100Filled'

      short_name='Orders'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-212v-412l-68-150 26-12 72 160h476l72-160 26 12-68 150v412H212Zm188-254h160q5.95 0 9.975-4.035 4.025-4.035 4.025-10T569.975-490q-4.025-4-9.975-4H400q-5.95 0-9.975 4.035-4.025 4.035-4.025 10t4.025 9.965q4.025 4 9.975 4Z"/>
    </Icon>
  );
});

IconMaterialOrdersW100Filled.displayName = 'AmauiIconMaterialOrdersW100Filled';

export default IconMaterialOrdersW100Filled;
