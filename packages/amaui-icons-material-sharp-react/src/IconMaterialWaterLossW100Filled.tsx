import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWaterLossW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterLossW100Filled'

      short_name='WaterLoss'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M261 724q43-21 89-31.5t94-10.5q29 0 57 3.5t55 11.5q53 15 80.5 20t59.5 5h3l51-466H209l52 468Zm-6 200-77-696h604l-77 696H255Z"/>
    </Icon>
  );
});

IconMaterialWaterLossW100Filled.displayName = 'AmauiIconMaterialWaterLossW100Filled';

export default IconMaterialWaterLossW100Filled;
