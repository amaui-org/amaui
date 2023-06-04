import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWaterEcW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterEcW100Filled'

      short_name='WaterEc'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 13.6v3.6q0 .15.15.175.15.025.2-.1l2-4.325q.1-.2-.025-.375t-.325-.175h-1.3V8.8q0-.15-.15-.175-.15-.025-.2.1l-2 4.325q-.1.2.025.375t.325.175Zm.35 7.1q-2.65 0-4.675-1.863Q5.3 16.975 5.3 13.8q0-2 1.538-4.375 1.537-2.375 4.637-5.25.125-.1.25-.15.125-.05.275-.05.15 0 .275.05.125.05.25.15 3.1 2.875 4.638 5.25Q18.7 11.8 18.7 13.8q0 3.175-2.025 5.037Q14.65 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialWaterEcW100Filled.displayName = 'AmauiIconMaterialWaterEcW100Filled';

export default IconMaterialWaterEcW100Filled;
