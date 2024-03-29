import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInbox = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Inbox'

      short_name='Inbox'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21V3h18v18Zm2-2h14v-3h-3q-.75.95-1.787 1.475Q13.175 18 12 18t-2.212-.525Q8.75 16.95 8 16H5Zm7-3q.95 0 1.725-.55Q14.5 14.9 14.8 14H19V5H5v9h4.2q.3.9 1.075 1.45Q11.05 16 12 16Zm-7 3h14Z"/>
    </Icon>
  );
});

IconMaterialInbox.displayName = 'AmauiIconMaterialInbox';

export default IconMaterialInbox;
