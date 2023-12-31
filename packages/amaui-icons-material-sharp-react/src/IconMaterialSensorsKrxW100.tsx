import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSensorsKrxW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SensorsKrxW100'

      short_name='SensorsKrx'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.056-306Q407-306 356.5-356.417T306-479.852Q306-552 356.417-603t123.435-51Q552-654 603-603.121q51 50.878 51 123.065Q654-407 603.121-356.5 552.243-306 480.056-306ZM480-334q60 0 103-42.583Q626-419.167 626-480q0-60-43-103t-103.5-43q-60.5 0-103 43T334-479.5q0 60.5 42.583 103Q419.167-334 480-334Zm-267 8q-20-34-30.5-73T172-480q0-42 10.5-81t30.5-73l24 14q-18 31-27.5 66.5T200-480q0 38 9.5 73.5T237-340l-24 14Zm534 0-24-14q18-31 27.5-66.5T760-480q0-38-9.5-73.5T723-620l24-14q20 34 30.5 73t10.5 81q0 42-10.5 81T747-326ZM480-480Z"/>
    </Icon>
  );
});

IconMaterialSensorsKrxW100.displayName = 'AmauiIconMaterialSensorsKrxW100';

export default IconMaterialSensorsKrxW100;
