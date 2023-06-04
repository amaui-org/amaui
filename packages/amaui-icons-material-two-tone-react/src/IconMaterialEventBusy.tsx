import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEventBusy = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventBusy'

      short_name='EventBusy'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M5 5h14v2H5z" opacity=".3"/><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zm0-12H5V5h14v2zM9.29 17.47l2.44-2.44 2.44 2.44 1.06-1.06-2.44-2.44 2.44-2.44-1.06-1.06-2.44 2.44-2.44-2.44-1.06 1.06 2.44 2.44-2.44 2.44z"/>
    </Icon>
  );
});

IconMaterialEventBusy.displayName = 'AmauiIconMaterialEventBusy';

export default IconMaterialEventBusy;
