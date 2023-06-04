import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWaterLossFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterLossFilled'

      short_name='WaterLoss'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M258 696q45-20 92-30t95-10q30 0 59.5 4t58.5 12q50 14 76.5 19t56.5 5h6l48-440H209l49 440Zm-50 280-88-800h720l-88 800H208Z"/>
    </Icon>
  );
});

IconMaterialWaterLossFilled.displayName = 'AmauiIconMaterialWaterLossFilled';

export default IconMaterialWaterLossFilled;
