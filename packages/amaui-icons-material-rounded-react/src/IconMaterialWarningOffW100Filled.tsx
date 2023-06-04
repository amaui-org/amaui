import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWarningOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WarningOffW100Filled'

      short_name='WarningOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 796q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Zm-14-94q0 6 4 10t10 4q6 0 10-4t4-10V590l-28-28v140Zm266 13L413 396l41-71q9-15 26-15t26 15l226 390Zm67 220-51-51H182q-17 0-26-15t0-30l216-371 217 216h-40L120 256q-4-4-4.5-9.5T120 236q5-5 10-5t10 5l679 679q4 4 4.5 9.5T819 935q-5 5-10 5t-10-5Z"/>
    </Icon>
  );
});

IconMaterialWarningOffW100Filled.displayName = 'AmauiIconMaterialWarningOffW100Filled';

export default IconMaterialWarningOffW100Filled;
