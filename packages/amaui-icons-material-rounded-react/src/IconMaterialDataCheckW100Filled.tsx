import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDataCheckW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataCheckW100Filled'

      short_name='DataCheck'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m612 457-47-46q-4-4-9.5-4.5T545 411q-5 5-5 10t5 10l46 45q9 9 21 9t21-9l102-102q4-4 4.5-9.5T735 354q-5-5-10-5t-10 5L612 457ZM186 870q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h400q5.95 0 9.975 4.035 4.025 4.035 4.025 10T595.975 866q-4.025 4-9.975 4H186Zm454.148-280Q568 590 517 539.148q-51-50.851-51-123Q466 344 516.852 293q50.851-51 123-51Q712 242 763 292.852q51 50.851 51 123Q814 488 763.148 539q-50.851 51-123 51ZM186 550q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h190q3 8 6.5 14.5T390 550H186Zm0 160q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h355q14 5 29 9t30 6q0 5-4.025 9T586 710H186Z"/>
    </Icon>
  );
});

IconMaterialDataCheckW100Filled.displayName = 'AmauiIconMaterialDataCheckW100Filled';

export default IconMaterialDataCheckW100Filled;
