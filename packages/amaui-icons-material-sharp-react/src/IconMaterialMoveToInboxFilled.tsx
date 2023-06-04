import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMoveToInboxFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveToInboxFilled'

      short_name='MoveToInbox'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21V3h18v18Zm9-5q.95 0 1.725-.55Q14.5 14.9 14.8 14H19V5H5v9h4.2q.3.9 1.075 1.45Q11.05 16 12 16Zm0-2-4-4 1.4-1.45 1.6 1.6V6h2v4.15l1.6-1.6L16 10Z"/>
    </Icon>
  );
});

IconMaterialMoveToInboxFilled.displayName = 'AmauiIconMaterialMoveToInboxFilled';

export default IconMaterialMoveToInboxFilled;
