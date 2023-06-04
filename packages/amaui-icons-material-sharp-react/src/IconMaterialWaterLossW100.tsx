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
      <path d="M443 710q-48 0-92.5 10.5T264 752l16 144h400l16-146q-35 0-65-5.5T549 724q-26-8-52.5-11t-53.5-3Zm-182 14q43-21 89-31.5t94-10.5q29 0 57 3.5t55 11.5q53 15 80.5 20t59.5 5h3l51-466H209l52 468Zm-6 200-77-696h604l-77 696H255Zm188-28h237-400 163Z"/>
    </Icon>
  );
});

IconMaterialWaterLossW100.displayName = 'AmauiIconMaterialWaterLossW100';

export default IconMaterialWaterLossW100;
