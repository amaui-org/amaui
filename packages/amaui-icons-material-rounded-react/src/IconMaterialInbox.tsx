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
      <path d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm0-2h14v-3h-3q-.75.95-1.787 1.475Q13.175 18 12 18t-2.212-.525Q8.75 16.95 8 16H5v3Zm7-3q.75 0 1.425-.363.675-.362 1.15-1.137.125-.225.35-.363.225-.137.525-.137H19V5H5v9h3.55q.3 0 .525.137.225.138.35.363.475.775 1.15 1.137Q11.25 16 12 16Zm-7 3h14Z"/>
    </Icon>
  );
});

IconMaterialInbox.displayName = 'AmauiIconMaterialInbox';

export default IconMaterialInbox;
