import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInboxFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InboxFilled'

      short_name='Inbox'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21V3h18v18Zm9-5q.95 0 1.725-.55Q14.5 14.9 14.8 14H19V5H5v9h4.2q.3.9 1.075 1.45Q11.05 16 12 16Z"/>
    </Icon>
  );
});

IconMaterialInboxFilled.displayName = 'AmauiIconMaterialInboxFilled';

export default IconMaterialInboxFilled;
