import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSensorsKrxW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SensorsKrxW100Filled'

      short_name='SensorsKrx'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.056-306Q407-306 356.5-356.417T306-479.852Q306-552 356.417-603t123.435-51Q552-654 603-603.121q51 50.878 51 123.065Q654-407 603.121-356.5 552.243-306 480.056-306ZM213-326q-20-34-30.5-73T172-480q0-42 10.5-81t30.5-73l24 14q-18 31-27.5 66.5T200-480q0 38 9.5 73.5T237-340l-24 14Zm534 0-24-14q18-31 27.5-66.5T760-480q0-38-9.5-73.5T723-620l24-14q20 34 30.5 73t10.5 81q0 42-10.5 81T747-326Z"/>
    </Icon>
  );
});

IconMaterialSensorsKrxW100Filled.displayName = 'AmauiIconMaterialSensorsKrxW100Filled';

export default IconMaterialSensorsKrxW100Filled;
