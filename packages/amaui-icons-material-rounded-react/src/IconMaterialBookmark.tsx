import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBookmark = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Bookmark'

      short_name='Bookmark'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m7 17.95 5-2.15 5 2.15V5H7Zm-.6 2.45q-.5.2-.95-.088-.45-.287-.45-.837V5q0-.825.588-1.413Q6.175 3 7 3h10q.825 0 1.413.587Q19 4.175 19 5v14.475q0 .55-.45.837-.45.288-.95.088L12 18ZM7 5h10-5Z"/>
    </Icon>
  );
});

IconMaterialBookmark.displayName = 'AmauiIconMaterialBookmark';

export default IconMaterialBookmark;
