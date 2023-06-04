import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoScheduleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoScheduleW100Filled'

      short_name='AutoSchedule'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 20.7V5.3h3.5V3h.8v2.3h6.9V3h.7v2.3h3.5v15.4ZM5 20h14v-9.2H5Zm7-2.15-.75-1.7-1.7-.75 1.7-.75.75-1.7.75 1.7 1.7.75-1.7.75Z"/>
    </Icon>
  );
});

IconMaterialAutoScheduleW100Filled.displayName = 'AmauiIconMaterialAutoScheduleW100Filled';

export default IconMaterialAutoScheduleW100Filled;
