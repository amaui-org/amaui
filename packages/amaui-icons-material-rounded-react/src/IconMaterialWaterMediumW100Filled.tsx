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
      <path d="M248 610q46-24 95-36t101-12q29 0 57 3.5t55 11.5q53 15 80.5 20t59.5 5h16l38-346H209l39 354Zm61 314q-23 0-40.5-15T249 871l-67-610q-2-14 6.5-23.5T211 228h538q14 0 22.5 9.5T778 261l-67 610q-2 23-19.5 38T651 924H309Z"/>
    </Icon>
  );
});

IconMaterialWaterMediumW100Filled.displayName = 'AmauiIconMaterialWaterMediumW100Filled';

export default IconMaterialWaterMediumW100Filled;
