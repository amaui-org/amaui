import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMoveToInboxW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveToInboxW100Filled'

      short_name='MoveToInbox'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 19.7V4.3h15.4v15.4Zm7.7-2.9q.95 0 1.725-.55.775-.55 1.075-1.45H19V5H5v9.8h4.2q.3.9 1.075 1.45.775.55 1.725.55Zm0-3.7L8.9 10l.5-.5 2.25 2.25V6.9h.7v4.85L14.6 9.5l.5.5Z"/>
    </Icon>
  );
});

IconMaterialMoveToInboxW100Filled.displayName = 'AmauiIconMaterialMoveToInboxW100Filled';

export default IconMaterialMoveToInboxW100Filled;
