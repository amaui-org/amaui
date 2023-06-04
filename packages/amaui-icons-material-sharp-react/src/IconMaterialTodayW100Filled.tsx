import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTodayW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TodayW100Filled'

      short_name='Today'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 15.35q-.825 0-1.412-.588Q7 14.175 7 13.35t.588-1.412Q8.175 11.35 9 11.35t1.413.588q.587.587.587 1.412t-.587 1.412q-.588.588-1.413.588ZM4.3 20.7V5.3h3.5V3h.8v2.3h6.9V3h.7v2.3h3.5v15.4ZM5 20h14v-9.2H5Z"/>
    </Icon>
  );
});

IconMaterialTodayW100Filled.displayName = 'AmauiIconMaterialTodayW100Filled';

export default IconMaterialTodayW100Filled;
