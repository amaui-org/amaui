import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInboxW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InboxW100Filled'

      short_name='Inbox'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 19.7V4.3h15.4v15.4Zm7.7-2.9q.95 0 1.725-.55.775-.55 1.075-1.45H19V5H5v9.8h4.2q.3.9 1.075 1.45.775.55 1.725.55Z"/>
    </Icon>
  );
});

IconMaterialInboxW100Filled.displayName = 'AmauiIconMaterialInboxW100Filled';

export default IconMaterialInboxW100Filled;
