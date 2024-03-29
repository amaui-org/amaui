import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWaterFull = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterFull'

      short_name='WaterFull'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M444 456q-55 0-108 15.5T238 518l42 378h400l44-400h-27q-38 0-69.5-5.5T542 469q-23-7-48-10t-50-3Zm-216-25q51-27 105.5-41T445 376q30 0 59.5 4t58.5 12q50 14 76.5 19t56.5 5h37l17-160H209l19 175Zm-20 545-88-800h720l-88 800H208Zm236-80h236-400 164Z"/>
    </Icon>
  );
});

IconMaterialWaterFull.displayName = 'AmauiIconMaterialWaterFull';

export default IconMaterialWaterFull;
