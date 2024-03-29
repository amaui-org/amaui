import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBookmarkRemoveFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkRemoveFilled'

      short_name='BookmarkRemove'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16 7q-.425 0-.712-.287Q15 6.425 15 6t.288-.713Q15.575 5 16 5h4q.425 0 .712.287Q21 5.575 21 6t-.288.713Q20.425 7 20 7ZM6.4 20.4q-.5.2-.95-.088-.45-.287-.45-.837V5q0-.825.588-1.413Q6.175 3 7 3h7q-.5.75-.75 1.438Q13 5.125 13 6q0 1.8 1.137 3.175Q15.275 10.55 17 10.9q.575.075 1 .075.425 0 1-.075v8.575q0 .55-.45.837-.45.288-.95.088L12 18Z"/>
    </Icon>
  );
});

IconMaterialBookmarkRemoveFilled.displayName = 'AmauiIconMaterialBookmarkRemoveFilled';

export default IconMaterialBookmarkRemoveFilled;
