import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWaterBottleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterBottleW100Filled'

      short_name='WaterBottle'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M421.649 924q-22.649 0-40.016-15.375Q364.265 893.25 362 870l-27-290q-1-6.667 2-12.333Q340 562 345 557q13-12 19.5-28t6.5-32.842q0-15.158-5-29.658-5-14.5-15-25.5-5-5-7-11.5t0-12.5l11-46q2-10 10.556-16.5Q374.111 348 385 348h101v-64h-46q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h120q5.95 0 9.975 4.035 4.025 4.035 4.025 10T569.975 280q-4.025 4-9.975 4h-46v64h101q10.684 0 18.697 6.133Q641.711 360.267 644 371l11 44q2 6 0 12.5t-7 11.5q-10 11-15 25.5t-5 29.5q0 17 6.5 33t18.5 28q5 5 8 10.667 3 5.666 2 12.333l-25 291q-2.25 23.356-19.5 39.178Q601.25 924 578 924H421.649Z"/>
    </Icon>
  );
});

IconMaterialWaterBottleW100Filled.displayName = 'AmauiIconMaterialWaterBottleW100Filled';

export default IconMaterialWaterBottleW100Filled;
