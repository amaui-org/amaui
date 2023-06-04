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
      <path d="M393 896h214l29-317q-15-14-24.5-31.5T600 510H400q-2 20-11.52 37.387T364 579l29 317Zm-11-520-11 44q11 14 19 29.5t10 32.5h200q2-17 9.5-33t19.5-29l-11-44H382Zm-15 548-33-358q17-12 27-30.5t10-39.643q0-19.028-8-35.943Q355 443 341 431l20-83h125v-64h-60v-28h148v28h-60v64h125l19 81q-14 12-22 28.914-8 16.915-8 35.943 0 21.143 9.5 39.643T664 564l-31 360H367Zm133-414Zm0-28Z"/>
    </Icon>
  );
});

IconMaterialWaterBottleW100.displayName = 'AmauiIconMaterialWaterBottleW100';

export default IconMaterialWaterBottleW100;
