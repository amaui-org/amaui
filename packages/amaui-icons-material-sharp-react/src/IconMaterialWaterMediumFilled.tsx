import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWaterMediumFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterMediumFilled'

      short_name='WaterMedium'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M245 582q47-23 97.5-34.5T445 536q30 0 59.5 4t58.5 12q50 14 76.5 19t56.5 5h19l35-320H209l36 326Zm-37 394-88-800h720l-88 800H208Z"/>
    </Icon>
  );
});

IconMaterialWaterMediumFilled.displayName = 'AmauiIconMaterialWaterMediumFilled';

export default IconMaterialWaterMediumFilled;
