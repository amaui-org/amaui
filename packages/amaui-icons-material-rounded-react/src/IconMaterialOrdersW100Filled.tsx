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
      <path d="M212-272v-352l-62-137q-2-5 0-11t7-8q5-2 11 0t8 7l66 147h476l66-147q2-5 8-7t11 .133q5 1.867 7 7.867t0 11l-62 137v352q0 24.75-17.625 42.375T688-212H272q-24.75 0-42.375-17.625T212-272Zm188-194h160q5.95 0 9.975-4.035 4.025-4.035 4.025-10T569.975-490q-4.025-4-9.975-4H400q-5.95 0-9.975 4.035-4.025 4.035-4.025 10t4.025 9.965q4.025 4 9.975 4Z"/>
    </Icon>
  );
});

IconMaterialOrdersW100Filled.displayName = 'AmauiIconMaterialOrdersW100Filled';

export default IconMaterialOrdersW100Filled;
