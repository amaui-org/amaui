import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWaterPumpFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterPumpFilled'

      short_name='WaterPump'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-230q-104 0-177-73t-73-177q0-104 73-177t177-73q104 0 177 73t73 177q0 104-73 177t-177 73Zm0-141q42 0 71-29t29-70q0-20-7.5-37.5T551-539l-71-70-71 70q-14 14-21.5 31.5T380-470q0 41 29 70t71 29Zm360-109v-40h-53q-11-80-57.5-143.5T613-760h227v-40h80v320h-80ZM40-160v-320h80v40h53q11 80 57.5 143.5T347-200H120v40H40Z"/>
    </Icon>
  );
});

IconMaterialWaterPumpFilled.displayName = 'AmauiIconMaterialWaterPumpFilled';

export default IconMaterialWaterPumpFilled;
