import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWaterBottleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterBottleW100'

      short_name='WaterBottle'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M600 510H400q-2 20-11.5 37.5T364 579l26 288q2 12 10.5 20.5T422 896h156q13 0 21.5-8.5T610 867l26-288q-15-14-24.5-31.5T600 510ZM382 376l-11 44q11 14 19 29.5t10 32.5h200q2-17 9.5-33t19.5-29l-11-44H382Zm39.649 548q-22.649 0-40.016-15.375Q364.265 893.25 362 870l-27-290q-1-6.667 2-12.333Q340 562 345 557q13-12 19.5-28t6.5-32.842q0-15.158-5-29.658-5-14.5-15-25.5-5-5-7-11.5t0-12.5l11-46q2-10 10.556-16.5Q374.111 348 385 348h101v-64h-46q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h120q5.95 0 9.975 4.035 4.025 4.035 4.025 10T569.975 280q-4.025 4-9.975 4h-46v64h101q10.684 0 18.697 6.133Q641.711 360.267 644 371l11 44q2 6 0 12.5t-7 11.5q-10 11-15 25.5t-5 29.5q0 17 6.5 33t18.5 28q5 5 8 10.667 3 5.666 2 12.333l-25 291q-2.25 23.356-19.5 39.178Q601.25 924 578 924H421.649ZM500 510Zm0-28Z"/>
    </Icon>
  );
});

IconMaterialWaterBottleW100.displayName = 'AmauiIconMaterialWaterBottleW100';

export default IconMaterialWaterBottleW100;
