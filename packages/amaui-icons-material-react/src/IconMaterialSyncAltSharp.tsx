import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSyncAltSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SyncAltSharp'
      short_name='SyncAlt'

      {...props}
    >
      <path d="M17 13 15.575 11.6 18.175 9H3V7H18.175L15.575 4.4L17 3L22 8ZM7 21 2 16 7 11 8.425 12.4 5.825 15H21V17H5.825L8.425 19.6Z"/>
    </Icon>
  );
});

IconMaterialSyncAltSharp.displayName = 'AmauiIconMaterialSyncAltSharp';

export default IconMaterialSyncAltSharp;
