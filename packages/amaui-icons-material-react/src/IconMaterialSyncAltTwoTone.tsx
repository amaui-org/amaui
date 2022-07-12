import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSyncAltTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SyncAltTwoTone'
      short_name='SyncAlt'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><polygon points="18,12 22,8 18,4 18,7 3,7 3,9 18,9"/><polygon points="6,12 2,16 6,20 6,17 21,17 21,15 6,15"/></g></g>
    </Icon>
  )
});

export default IconMaterialSyncAltTwoTone;
