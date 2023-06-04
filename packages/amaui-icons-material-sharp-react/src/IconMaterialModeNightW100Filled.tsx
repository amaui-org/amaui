import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialModeNightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeNightW100Filled'

      short_name='ModeNight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.85 3.3q1.8 0 3.388.687Q13.825 4.675 15 5.85t1.863 2.762Q17.55 10.2 17.55 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862-1.588.688-3.388.688-.625 0-1.225-.075-.6-.075-1.175-.275 1.775-1.625 2.738-3.788.962-2.162.962-4.562 0-2.4-.962-4.563Q8.225 5.275 6.45 3.65q.575-.2 1.175-.275.6-.075 1.225-.075Z"/>
    </Icon>
  );
});

IconMaterialModeNightW100Filled.displayName = 'AmauiIconMaterialModeNightW100Filled';

export default IconMaterialModeNightW100Filled;
