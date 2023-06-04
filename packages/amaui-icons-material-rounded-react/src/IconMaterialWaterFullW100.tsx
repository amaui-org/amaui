import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWaterFullW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterFullW100'

      short_name='WaterFull'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M443 430q-57 0-109 15t-99 44l42 379q2 12 11 20t21 8h342q12 0 21-8t11-20l44-398h-30q-35 0-65.5-5.5T549 444q-26-8-52.5-11t-53.5-3ZM209 256l23 204q49-29 102-43.5T444 402q29 0 57 3.5t55 11.5q53 15 80.5 20t59.5 5h34l20-186H209Zm234 640h240-406 166Zm-134 28q-23 0-40.5-15T249 871l-67-610q-2-14 6.5-23.5T211 228h538q14 0 22.5 9.5T778 261l-67 610q-2 23-19.5 38T651 924H309Z"/>
    </Icon>
  );
});

IconMaterialWaterFullW100.displayName = 'AmauiIconMaterialWaterFullW100';

export default IconMaterialWaterFullW100;
