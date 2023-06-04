import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDataInfoAlertW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataInfoAlertW100Filled'

      short_name='DataInfoAlert'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M186 870q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h400q5.95 0 9.975 4.035 4.025 4.035 4.025 10T595.975 866q-4.025 4-9.975 4H186Zm454.148-280Q568 590 517 539.148q-51-50.851-51-123Q466 344 516.852 293q50.851-51 123-51Q712 242 763 292.852q51 50.851 51 123Q814 488 763.148 539q-50.851 51-123 51ZM186 550q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h190q3 8 6.5 14.5T390 550H186Zm0 160q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h355q14 5 29 9t30 6q0 5-4.025 9T586 710H186Zm454-180q5.6 0 9.8-4.2 4.2-4.2 4.2-9.8V406q0-5.6-4.2-9.8-4.2-4.2-9.8-4.2-5.6 0-9.8 4.2-4.2 4.2-4.2 9.8v110q0 5.6 4.2 9.8 4.2 4.2 9.8 4.2Zm0-184q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Z"/>
    </Icon>
  );
});

IconMaterialDataInfoAlertW100Filled.displayName = 'AmauiIconMaterialDataInfoAlertW100Filled';

export default IconMaterialDataInfoAlertW100Filled;
