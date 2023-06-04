import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWaterBottleLargeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterBottleLargeW100Filled'

      short_name='WaterBottleLarge'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M306 930q-24.75 0-42.375-17.625T246 870v-68q0-24.75 17.625-42.375T306 742h20V530h-20q-24.75 0-42.375-17.625T246 470v-68q0-24.75 17.625-42.375T306 342h130v-60h-26q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h140q5.95 0 9.975 4.035 4.025 4.035 4.025 10T559.975 278q-4.025 4-9.975 4h-26v60h130q24.75 0 42.375 17.625T714 402v68q0 24.75-17.625 42.375T654 530h-20v212h20q24.75 0 42.375 17.625T714 802v68q0 24.75-17.625 42.375T654 930H306Z"/>
    </Icon>
  );
});

IconMaterialWaterBottleLargeW100Filled.displayName = 'AmauiIconMaterialWaterBottleLargeW100Filled';

export default IconMaterialWaterBottleLargeW100Filled;
