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
      <path d="M232 460q49-29 102-43.5T444 402q29 0 57 3.5t55 11.5q53 15 80.5 20t59.5 5h34l20-186H209l23 204Zm23 464-77-696h604l-77 696H255Z"/>
    </Icon>
  );
});

IconMaterialWaterFullW100Filled.displayName = 'AmauiIconMaterialWaterFullW100Filled';

export default IconMaterialWaterFullW100Filled;
