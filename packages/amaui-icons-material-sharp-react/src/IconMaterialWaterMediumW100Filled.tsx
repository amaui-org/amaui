import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWaterMediumW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterMediumW100Filled'

      short_name='WaterMedium'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M248 610q46-24 95-36t101-12q29 0 57 3.5t55 11.5q53 15 80.5 20t59.5 5h16l38-346H209l39 354Zm7 314-77-696h604l-77 696H255Z"/>
    </Icon>
  );
});

IconMaterialWaterMediumW100Filled.displayName = 'AmauiIconMaterialWaterMediumW100Filled';

export default IconMaterialWaterMediumW100Filled;
