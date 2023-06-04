import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUpcomingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UpcomingW100Filled'

      short_name='Upcoming'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m17.35 10.65-.5-.5L19.5 7.5l.5.5Zm-5.7-2.6v-3.7h.7v3.7Zm-5 2.6L4 8l.5-.5 2.65 2.65ZM3.3 19.7v-6.4H8q.425 1.35 1.525 2.175 1.1.825 2.475.825 1.425 0 2.525-.825 1.1-.825 1.475-2.175h4.7v6.4Z"/>
    </Icon>
  );
});

IconMaterialUpcomingW100Filled.displayName = 'AmauiIconMaterialUpcomingW100Filled';

export default IconMaterialUpcomingW100Filled;
