import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSyncAltSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SyncAltSharpW100Filled'
      short_name='SyncAlt'

      {...props}
    >
      <path d="M17 12.1 16.5 11.6 19.75 8.35H3.65V7.65H19.75L16.5 4.4L17 3.9L21.1 8ZM7 20.1 2.9 16 7 11.9 7.5 12.4 4.25 15.65H20.35V16.35H4.25L7.5 19.6Z"/>
    </Icon>
  );
});

IconMaterialSyncAltSharpW100Filled.displayName = 'AmauiIconMaterialSyncAltSharpW100Filled';

export default IconMaterialSyncAltSharpW100Filled;
