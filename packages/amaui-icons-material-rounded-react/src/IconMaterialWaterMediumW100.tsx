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
      <path d="m252 639 25 229q2 12 11 20t21 8h342q12 0 21-8t11-20l26-238h-12q-35 0-65.5-5.5T549 604q-26-8-52.5-11t-53.5-3q-51 0-99 12t-92 37Zm-4-29q46-24 95-36t101-12q29 0 57 3.5t55 11.5q53 15 80.5 20t59.5 5h16l38-346H209l39 354Zm61 314q-23 0-40.5-15T249 871l-67-610q-2-14 6.5-23.5T211 228h538q14 0 22.5 9.5T778 261l-67 610q-2 23-19.5 38T651 924H309Zm-32-28h406-406Z"/>
    </Icon>
  );
});

IconMaterialWaterMediumW100.displayName = 'AmauiIconMaterialWaterMediumW100';

export default IconMaterialWaterMediumW100;
