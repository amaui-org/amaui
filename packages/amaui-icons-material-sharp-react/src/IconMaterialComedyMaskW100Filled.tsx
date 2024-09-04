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
      <path d="M480-317q52 0 88-37.01T604-443H355q0 52 36.72 89T480-317Zm.06 185Q416-132 360-156.5T262-223q-42-42-66-99t-24-121v-385h616v385q0 64-24 121t-66 99q-42 42-97.94 66.5-55.95 24.5-120 24.5ZM310-586h120q0-25-17.88-43-17.89-18-43-18Q344-647 327-629.08q-17 17.92-17 43.08Zm220-1h120q0-25-17.68-42.5-17.67-17.5-42.5-17.5-24.82 0-42.32 17.62Q530-611.75 530-587Z"/>
    </Icon>
  );
});

IconMaterialComedyMaskW100Filled.displayName = 'AmauiIconMaterialComedyMaskW100Filled';

export default IconMaterialComedyMaskW100Filled;
