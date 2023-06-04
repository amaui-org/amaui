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
      <path d="M274 902h412V780h-80V520h-60v-28h140V370H274v122h80v260h60v28H274v122Zm-28 28V752h80V520h-80V342h190v-60h-40v-28h168v28h-40v60h190v178h-80v232h80v178H246Zm234-294Z"/>
    </Icon>
  );
});

IconMaterialWaterBottleLargeW100.displayName = 'AmauiIconMaterialWaterBottleLargeW100';

export default IconMaterialWaterBottleLargeW100;
