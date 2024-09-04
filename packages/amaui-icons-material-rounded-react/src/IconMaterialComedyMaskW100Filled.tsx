import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialComedyMaskW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ComedyMaskW100Filled'

      short_name='ComedyMask'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-317q48 0 82.06-30.97Q596.11-378.94 603-425q1-8-3.87-13-4.88-5-13.13-5H372.84q-7.84 0-12.84 5t-3.55 12.94Q363-379 397.5-348t82.5 31Zm.06 185Q416-132 360-156.5T262-223q-42-42-66-99t-24-121v-325q0-24.75 17.63-42.38Q207.25-828 232-828h496q24.75 0 42.38 17.62Q788-792.75 788-768v325q0 64-24 121t-66 99q-42 42-97.94 66.5-55.95 24.5-120 24.5Zm-.56-28Q596-160 678-242.5T760-443v-325q0-14-9-23t-23-9H232q-14 0-23 9t-9 23v325q0 118 81.5 200.5t198 82.5Zm.5 0q-117 0-198.5-82.5T200-443v-357h560v357q0 118-82 200.5T480-160ZM369-647q-20 0-36 12t-21.09 30.91q-1.91 7.09 2.6 12.59t12.78 5.5h84.19q7.52 0 12.52-5.63 5-5.62 3-12.37-6-19-22-31t-36-12Zm221.18 0q-20.18 0-35.55 12.06-15.38 12.06-21.38 30.16-2.25 6.78 2.26 12.28 4.51 5.5 12.78 5.5h84.19q7.52 0 12.02-5.63 4.5-5.62 2.5-12.37-5.98-18-21.31-30-15.32-12-35.51-12Z"/>
    </Icon>
  );
});

IconMaterialComedyMaskW100Filled.displayName = 'AmauiIconMaterialComedyMaskW100Filled';

export default IconMaterialComedyMaskW100Filled;
