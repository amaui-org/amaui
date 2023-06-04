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
      <path d="m209 256 19 175q51-27 105.5-41T445 376q30 0 59.5 4t58.5 12q50 14 76.5 19t56.5 5h37l17-160H209Zm71 720q-31 0-54-20t-26-51l-75-685q-2-18 10-31t30-13h630q18 0 30 13t10 31l-75 685q-3 31-26 51t-54 20H280Z"/>
    </Icon>
  );
});

IconMaterialWaterFullFilled.displayName = 'AmauiIconMaterialWaterFullFilled';

export default IconMaterialWaterFullFilled;
