import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBookmarkFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkFilled'

      short_name='Bookmark'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.4 20.4q-.5.2-.95-.088-.45-.287-.45-.837V5q0-.825.588-1.413Q6.175 3 7 3h10q.825 0 1.413.587Q19 4.175 19 5v14.475q0 .55-.45.837-.45.288-.95.088L12 18Z"/>
    </Icon>
  );
});

IconMaterialBookmarkFilled.displayName = 'AmauiIconMaterialBookmarkFilled';

export default IconMaterialBookmarkFilled;
