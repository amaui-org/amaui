import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBookmarksFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarksFilled'

      short_name='Bookmarks'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20 20q-.425 0-.712-.288Q19 19.425 19 19V3H7q-.425 0-.713-.288Q6 2.425 6 2t.287-.713Q6.575 1 7 1h12q.825 0 1.413.587Q21 2.175 21 3v16q0 .425-.288.712Q20.425 20 20 20ZM4.4 22.4q-.5.2-.95-.088-.45-.287-.45-.837V7q0-.825.587-1.412Q4.175 5 5 5h10q.825 0 1.413.588Q17 6.175 17 7v14.475q0 .55-.45.837-.45.288-.95.088L10 20Z"/>
    </Icon>
  );
});

IconMaterialBookmarksFilled.displayName = 'AmauiIconMaterialBookmarksFilled';

export default IconMaterialBookmarksFilled;
