import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWaterMediumW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterMediumW100'

      short_name='WaterMedium'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m252 639 28 257h400l29-266h-12q-35 0-65.5-5.5T549 604q-26-8-52.5-11t-53.5-3q-51 0-99 12t-92 37Zm-4-29q46-24 95-36t101-12q29 0 57 3.5t55 11.5q53 15 80.5 20t59.5 5h16l38-346H209l39 354Zm7 314-77-696h604l-77 696H255Zm25-28h400-400Z"/>
    </Icon>
  );
});

IconMaterialWaterMediumW100.displayName = 'AmauiIconMaterialWaterMediumW100';

export default IconMaterialWaterMediumW100;
