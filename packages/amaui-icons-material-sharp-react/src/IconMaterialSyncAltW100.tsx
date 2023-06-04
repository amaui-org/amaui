import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSyncAltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SyncAltW100'

      short_name='SyncAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 20.1 2.9 16 7 11.9l.5.5-3.25 3.25h16.1v.7H4.25L7.5 19.6Zm10-8-.5-.5 3.25-3.25H3.65v-.7h16.1L16.5 4.4l.5-.5L21.1 8Z"/>
    </Icon>
  );
});

IconMaterialSyncAltW100.displayName = 'AmauiIconMaterialSyncAltW100';

export default IconMaterialSyncAltW100;
