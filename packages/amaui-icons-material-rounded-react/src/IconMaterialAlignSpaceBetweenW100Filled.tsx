import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignSpaceBetweenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignSpaceBetweenW100Filled'

      short_name='AlignSpaceBetween'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M146 924q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h160v-38q0-12.75 8.625-21.375T336 828h288q12.75 0 21.375 8.625T654 858v38h160q5.95 0 9.975 4.035 4.025 4.035 4.025 10T823.975 920q-4.025 4-9.975 4H146Zm190-600q-12.75 0-21.375-8.625T306 294v-38H146q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h668q5.95 0 9.975 4.035 4.025 4.035 4.025 10T823.975 252q-4.025 4-9.975 4H654v38q0 12.75-8.625 21.375T624 324H336Z"/>
    </Icon>
  );
});

IconMaterialAlignSpaceBetweenW100Filled.displayName = 'AmauiIconMaterialAlignSpaceBetweenW100Filled';

export default IconMaterialAlignSpaceBetweenW100Filled;
