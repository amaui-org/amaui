import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWaterFullFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterFullFilled'

      short_name='WaterFull'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M228 431q51-27 105.5-41T445 376q30 0 59.5 4t58.5 12q50 14 76.5 19t56.5 5h37l17-160H209l19 175Zm-20 545-88-800h720l-88 800H208Z"/>
    </Icon>
  );
});

IconMaterialWaterFullFilled.displayName = 'AmauiIconMaterialWaterFullFilled';

export default IconMaterialWaterFullFilled;
