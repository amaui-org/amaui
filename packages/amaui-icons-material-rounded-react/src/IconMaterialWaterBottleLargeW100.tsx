import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWaterBottleLargeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterBottleLargeW100'

      short_name='WaterBottleLarge'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M306 930q-24.75 0-42.375-17.625T246 870v-68q0-24.75 17.625-42.375T306 742h20V530h-20q-24.75 0-42.375-17.625T246 470v-68q0-24.75 17.625-42.375T306 342h130v-60h-26q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h140q5.95 0 9.975 4.035 4.025 4.035 4.025 10T559.975 278q-4.025 4-9.975 4h-26v60h130q24.75 0 42.375 17.625T714 402v68q0 24.75-17.625 42.375T654 530h-20v212h20q24.75 0 42.375 17.625T714 802v68q0 24.75-17.625 42.375T654 930H306Zm0-28h348q14 0 23-9t9-23v-68q0-14-9-23t-23-9h-48V530h-46q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h94q14 0 23-9t9-23v-68q0-14-9-23t-23-9H306q-14 0-23 9t-9 23v68q0 14 9 23t23 9h48v240h46q5.95 0 9.975 4.035 4.025 4.035 4.025 10T409.975 766q-4.025 4-9.975 4h-94q-14 0-23 9t-9 23v68q0 14 9 23t23 9Zm174-266Z"/>
    </Icon>
  );
});

IconMaterialWaterBottleLargeW100.displayName = 'AmauiIconMaterialWaterBottleLargeW100';

export default IconMaterialWaterBottleLargeW100;
