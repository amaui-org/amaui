import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWeekendW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WeekendW100Filled'

      short_name='Weekend'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.3 18v-7.7H5v4.35h14V10.3h2.7V18Zm3.4-4.05V9.6H4V6.4h16v3.2h-1.7v4.35Z"/>
    </Icon>
  );
});

IconMaterialWeekendW100Filled.displayName = 'AmauiIconMaterialWeekendW100Filled';

export default IconMaterialWeekendW100Filled;
