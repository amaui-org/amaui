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
      <path d="M280 976q-33 0-56.5-23.5T200 896v-80q0-33 23.5-56.5T280 736V536q-33 0-56.5-23.5T200 456v-80q0-33 23.5-56.5T280 296h120v-40q-17 0-28.5-11.5T360 216q0-17 11.5-28.5T400 176h160q17 0 28.5 11.5T600 216q0 17-11.5 28.5T560 256v40h120q33 0 56.5 23.5T760 376v80q0 33-23.5 56.5T680 536v200q33 0 56.5 23.5T760 816v80q0 33-23.5 56.5T680 976H280Z"/>
    </Icon>
  );
});

IconMaterialWaterBottleLargeFilled.displayName = 'AmauiIconMaterialWaterBottleLargeFilled';

export default IconMaterialWaterBottleLargeFilled;
