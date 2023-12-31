import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStackStarW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StackStarW100Filled'

      short_name='StackStar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m600-304 52 32q5 2 8.5-1t2.071-8.091L649-340l45-39q4-3 2.544-7.392t-6.552-5.123l-58.968-5.124L607-453q-1.5-5-6.75-5t-7.25 5l-24.024 56.361-58.968 5.124q-5.096.731-6.552 5.123Q502-382 506-379l45 39-13.571 58.909Q536-276 539.5-273q3.5 3 8.5 1l52-32Zm-408-68q-24.75 0-42.375-17.625T132-432v-336q0-24.75 17.625-42.375T192-828h336q24.75 0 42.375 17.625T588-768v66q0 5.95-4.035 9.975-4.035 4.025-10 4.025T564-692.025q-4-4.025-4-9.975v-66q0-14-9-23t-23-9H192q-14 0-23 9t-9 23v336q0 14 9 23t23 9h66q5.95 0 9.975 4.035 4.025 4.035 4.025 10T267.975-376q-4.025 4-9.975 4h-66Zm240 240q-24.75 0-42.375-17.625T372-192v-336q0-24.75 17.625-42.375T432-588h336q24.75 0 42.375 17.625T828-528v336q0 24.75-17.625 42.375T768-132H432Z"/>
    </Icon>
  );
});

IconMaterialStackStarW100Filled.displayName = 'AmauiIconMaterialStackStarW100Filled';

export default IconMaterialStackStarW100Filled;
