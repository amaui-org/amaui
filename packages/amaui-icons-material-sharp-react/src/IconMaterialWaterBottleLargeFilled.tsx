import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWaterBottleLargeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterBottleLargeFilled'

      short_name='WaterBottleLarge'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M200 976V736h80V536h-80V296h200v-40h-40v-80h240v80h-40v40h200v240h-80v200h80v240H200Z"/>
    </Icon>
  );
});

IconMaterialWaterBottleLargeFilled.displayName = 'AmauiIconMaterialWaterBottleLargeFilled';

export default IconMaterialWaterBottleLargeFilled;
