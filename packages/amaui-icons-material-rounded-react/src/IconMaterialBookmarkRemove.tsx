import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBookmarkRemove = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkRemove'

      short_name='BookmarkRemove'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.4 20.4q-.5.2-.95-.088-.45-.287-.45-.837V5q0-.825.588-1.413Q6.175 3 7 3h6v2H7v12.95l5-2.15 5 2.15V11h2v8.475q0 .55-.45.837-.45.288-.95.088L12 18ZM7 5h6-1Zm9 2q-.425 0-.712-.287Q15 6.425 15 6t.288-.713Q15.575 5 16 5h4q.425 0 .712.287Q21 5.575 21 6t-.288.713Q20.425 7 20 7Z"/>
    </Icon>
  );
});

IconMaterialBookmarkRemove.displayName = 'AmauiIconMaterialBookmarkRemove';

export default IconMaterialBookmarkRemove;
