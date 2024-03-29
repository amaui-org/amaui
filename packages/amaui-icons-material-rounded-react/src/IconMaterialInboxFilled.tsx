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
      <path d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm7-5q.75 0 1.425-.363.675-.362 1.15-1.137.125-.225.35-.363.225-.137.525-.137H19V5H5v9h3.55q.3 0 .525.137.225.138.35.363.475.775 1.15 1.137Q11.25 16 12 16Z"/>
    </Icon>
  );
});

IconMaterialInboxFilled.displayName = 'AmauiIconMaterialInboxFilled';

export default IconMaterialInboxFilled;
