import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWaterPump = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterPump'

      short_name='WaterPump'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-280h164q-17-17-31.5-37T227-360H120v80Zm360 0q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Zm253-320h107v-80H676q17 17 31.5 37t25.5 43ZM120-200q0 17-11.5 28.5T80-160q-17 0-28.5-11.5T40-200v-240q0-17 11.5-28.5T80-480q17 0 28.5 11.5T120-440h83q-2-10-2.5-19.5T200-480q0-117 81.5-198.5T480-760h360q0-17 11.5-28.5T880-800q17 0 28.5 11.5T920-760v240q0 17-11.5 28.5T880-480q-17 0-28.5-11.5T840-520h-83q2 10 2.5 19.5t.5 20.5q0 117-81.5 198.5T480-200H120Zm360-171q-42 0-71-29t-29-70q0-20 7.5-37.5T409-539l43-42q12-11 28-11t28 11l43 42q14 14 21.5 31.5T580-470q0 41-29 70t-71 29Zm-360 91v-80 80Zm720-320v-80 80ZM480-480Z"/>
    </Icon>
  );
});

IconMaterialWaterPump.displayName = 'AmauiIconMaterialWaterPump';

export default IconMaterialWaterPump;
