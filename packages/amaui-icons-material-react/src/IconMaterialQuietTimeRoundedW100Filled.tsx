import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialQuietTimeRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuietTimeRoundedW100Filled'
      short_name='QuietTime'

      {...props}
    >
      <path d="M13.1 21.7q-1.825 0-3.425-.688-1.6-.687-2.8-1.887-1.2-1.2-1.887-2.8-.688-1.6-.688-3.425 0-2.35 1.138-4.375Q6.575 6.5 8.6 5.35q.4-.225.787-.038.388.188.438.613.2 1.975 1.025 3.763.825 1.787 2.25 3.212 1.425 1.425 3.212 2.25 1.788.825 3.763 1.025.425.05.613.45.187.4-.038.8-1.15 2.025-3.175 3.15T13.1 21.7Z"/>
    </Icon>
  );
});

IconMaterialQuietTimeRoundedW100Filled.displayName = 'AmauiIconMaterialQuietTimeRoundedW100Filled';

export default IconMaterialQuietTimeRoundedW100Filled;
