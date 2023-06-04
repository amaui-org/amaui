import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWaterLossW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterLossW100'

      short_name='WaterLoss'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M443 710q-48 0-92.5 10.5T264 752l13 116q2 12 11 20t21 8h342q12 0 21-8t11-20l13-118q-35 0-65-5.5T549 724q-26-8-52.5-11t-53.5-3ZM209 256l52 468q43-21 89-31.5t94-10.5q29 0 57 3.5t55 11.5q53 15 80.5 20t59.5 5h3l51-466H209Zm100 668q-23 0-40.5-15T249 871l-67-610q-2-14 6.5-23.5T211 228h538q14 0 22.5 9.5T778 261l-67 610q-2 23-19.5 38T651 924H309Zm134-28h240-406 166Z"/>
    </Icon>
  );
});

IconMaterialWaterLossW100.displayName = 'AmauiIconMaterialWaterLossW100';

export default IconMaterialWaterLossW100;
