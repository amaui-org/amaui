import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEditCalendarW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditCalendarW100Filled'

      short_name='EditCalendar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 20.7V5.3h3.5V3h.8v2.3h6.9V3h.7v2.3h3.5v6.5H19v-1H5V20h4.7v.7Zm15.425-5.275L18.5 14.2l.975-.975L20.7 14.45Zm-7.025 5.8V20l5.1-5.1 1.225 1.225-5.1 5.1Z"/>
    </Icon>
  );
});

IconMaterialEditCalendarW100Filled.displayName = 'AmauiIconMaterialEditCalendarW100Filled';

export default IconMaterialEditCalendarW100Filled;
