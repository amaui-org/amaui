import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabRecentW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabRecentW100'

      short_name='TabRecent'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M720 964q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43Zm66-62 20-20-72-71.613V702h-28v120l80 80ZM560 446h240v155q8 2 14.5 5t13.5 7V308H132v536h361q-1-7-1-13.885V816H160V336h400v110ZM160 784v32-480 448Z"/>
    </Icon>
  );
});

IconMaterialTabRecentW100.displayName = 'AmauiIconMaterialTabRecentW100';

export default IconMaterialTabRecentW100;
