import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSyncAltSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SyncAltSharpW700'
      short_name='SyncAlt'

      {...props}
    >
      <path d="M16.625 13.375 14.375 11.175 16.775 8.775H2.425V5.625H16.775L14.375 3.2L16.625 1L22.8 7.2ZM7.375 23 1.2 16.8 7.375 10.625 9.625 12.825 7.225 15.225H21.575V18.375H7.225L9.625 20.8Z"/>
    </Icon>
  )
});

export default IconMaterialSyncAltSharpW700;
