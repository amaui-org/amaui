import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRepeatOneOnFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RepeatOneOnFilled'

      short_name='RepeatOneOn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.5 15H13V9h-3v1.5h1.5ZM3 23q-.825 0-1.412-.587Q1 21.825 1 21V3q0-.825.588-1.413Q2.175 1 3 1h18q.825 0 1.413.587Q23 2.175 23 3v18q0 .825-.587 1.413Q21.825 23 21 23Zm4-1 1.4-1.45L6.85 19H19v-6h-2v4H6.85l1.55-1.55L7 14l-4 4ZM5 11h2V7h10.15L15.6 8.55 17 10l4-4-4-4-1.4 1.45L17.15 5H5Z"/>
    </Icon>
  );
});

IconMaterialRepeatOneOnFilled.displayName = 'AmauiIconMaterialRepeatOneOnFilled';

export default IconMaterialRepeatOneOnFilled;
