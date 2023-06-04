import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWaterEcW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterEcW100'

      short_name='WaterEc'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 13.6v3.6q0 .15.15.175.15.025.2-.1l2-4.325q.1-.2-.025-.375t-.325-.175h-1.3V8.8q0-.15-.15-.175-.15-.025-.2.1l-2 4.325q-.1.2.025.375t.325.175Zm.35 7.1q-2.65 0-4.675-1.863Q5.3 16.975 5.3 13.8q0-2 1.538-4.375 1.537-2.375 4.637-5.25.125-.1.25-.15.125-.05.275-.05.15 0 .275.05.125.05.25.15 3.1 2.875 4.638 5.25Q18.7 11.8 18.7 13.8q0 3.175-2.025 5.037Q14.65 20.7 12 20.7Zm0-.7q2.5 0 4.25-1.738Q18 16.525 18 13.8q0-1.775-1.475-4.063Q15.05 7.45 12 4.65q-3.05 2.8-4.525 5.087Q6 12.025 6 13.8q0 2.725 1.75 4.462Q9.5 20 12 20Zm0-6.2Z"/>
    </Icon>
  );
});

IconMaterialWaterEcW100.displayName = 'AmauiIconMaterialWaterEcW100';

export default IconMaterialWaterEcW100;
