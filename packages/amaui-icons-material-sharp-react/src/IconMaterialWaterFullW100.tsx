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
      <path d="M443 430q-57 0-109 15t-99 44l45 407h400l47-426h-30q-35 0-65.5-5.5T549 444q-26-8-52.5-11t-53.5-3Zm-211 30q49-29 102-43.5T444 402q29 0 57 3.5t55 11.5q53 15 80.5 20t59.5 5h34l20-186H209l23 204Zm23 464-77-696h604l-77 696H255Zm188-28h237-400 163Z"/>
    </Icon>
  );
});

IconMaterialWaterFullW100.displayName = 'AmauiIconMaterialWaterFullW100';

export default IconMaterialWaterFullW100;
