import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoScheduleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoScheduleW100'

      short_name='AutoSchedule'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 20.7V5.3h3.5V3h.8v2.3h6.9V3h.7v2.3h3.5v15.4ZM5 20h14v-9.2H5Zm0-9.9h14V6H5Zm0 0V6v4.1Zm7 7.75-.75-1.7-1.7-.75 1.7-.75.75-1.7.75 1.7 1.7.75-1.7.75Z"/>
    </Icon>
  );
});

IconMaterialAutoScheduleW100.displayName = 'AmauiIconMaterialAutoScheduleW100';

export default IconMaterialAutoScheduleW100;
