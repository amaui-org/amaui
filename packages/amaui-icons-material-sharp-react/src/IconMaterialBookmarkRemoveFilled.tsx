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
      <path d="M21 7h-6V5h6ZM5 21V3h9q-.5.75-.75 1.438Q13 5.125 13 6q0 1.8 1.137 3.175Q15.275 10.55 17 10.9q.575.075 1 .075.425 0 1-.075V21l-7-3Z"/>
    </Icon>
  );
});

IconMaterialBookmarkRemoveFilled.displayName = 'AmauiIconMaterialBookmarkRemoveFilled';

export default IconMaterialBookmarkRemoveFilled;
