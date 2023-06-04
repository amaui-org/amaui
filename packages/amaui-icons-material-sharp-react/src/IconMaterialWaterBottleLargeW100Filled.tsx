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
      <path d="M246 930V752h80V520h-80V342h190v-60h-40v-28h168v28h-40v60h190v178h-80v232h80v178H246Z"/>
    </Icon>
  );
});

IconMaterialWaterBottleLargeW100Filled.displayName = 'AmauiIconMaterialWaterBottleLargeW100Filled';

export default IconMaterialWaterBottleLargeW100Filled;
