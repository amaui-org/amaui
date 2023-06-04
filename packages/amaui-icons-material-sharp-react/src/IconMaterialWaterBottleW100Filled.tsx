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
      <path d="m367 924-33-358q17-12 27-30.5t10-39.5q0-19-8-36t-22-29l20-83h125v-64h-60v-28h148v28h-60v64h125l19 81q-14 12-22 29t-8 36q0 21 9.5 39.5T664 564l-31 360H367Z"/>
    </Icon>
  );
});

IconMaterialWaterBottleW100Filled.displayName = 'AmauiIconMaterialWaterBottleW100Filled';

export default IconMaterialWaterBottleW100Filled;
