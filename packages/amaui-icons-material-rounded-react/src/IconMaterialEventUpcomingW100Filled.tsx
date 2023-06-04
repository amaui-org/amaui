import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEventUpcomingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventUpcomingW100Filled'

      short_name='EventUpcoming'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.075 20.7V20H18.2q.3 0 .55-.25.25-.25.25-.55v-8.4H5v3.85h-.7V6.8q0-.65.425-1.075Q5.15 5.3 5.8 5.3h2V3h.8v2.3h6.9V3h.7v2.3h2q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425ZM8 23.075l-.475-.475 3.2-3.25H1.65v-.7h9.075l-3.2-3.25.475-.475L12.075 19Z"/>
    </Icon>
  );
});

IconMaterialEventUpcomingW100Filled.displayName = 'AmauiIconMaterialEventUpcomingW100Filled';

export default IconMaterialEventUpcomingW100Filled;
