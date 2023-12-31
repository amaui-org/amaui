import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStackW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StackW100Filled'

      short_name='Stack'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-372q-24.75 0-42.375-17.625T132-432v-336q0-24.75 17.625-42.375T192-828h336q24.75 0 42.375 17.625T588-768v66q0 5.95-4.035 9.975-4.035 4.025-10 4.025T564-692.025q-4-4.025-4-9.975v-66q0-14-9-23t-23-9H192q-14 0-23 9t-9 23v336q0 14 9 23t23 9h66q5.95 0 9.975 4.035 4.025 4.035 4.025 10T267.975-376q-4.025 4-9.975 4h-66Zm240 240q-24.75 0-42.375-17.625T372-192v-336q0-24.75 17.625-42.375T432-588h336q24.75 0 42.375 17.625T828-528v336q0 24.75-17.625 42.375T768-132H432Z"/>
    </Icon>
  );
});

IconMaterialStackW100Filled.displayName = 'AmauiIconMaterialStackW100Filled';

export default IconMaterialStackW100Filled;
