import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWaterFullW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterFullW100Filled'

      short_name='WaterFull'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m209 256 23 204q49-29 102-43.5T444 402q29 0 57 3.5t55 11.5q53 15 80.5 20t59.5 5h34l20-186H209Zm100 668q-23 0-40.5-15T249 871l-67-610q-2-14 6.5-23.5T211 228h538q14 0 22.5 9.5T778 261l-67 610q-2 23-19.5 38T651 924H309Z"/>
    </Icon>
  );
});

IconMaterialWaterFullW100Filled.displayName = 'AmauiIconMaterialWaterFullW100Filled';

export default IconMaterialWaterFullW100Filled;
