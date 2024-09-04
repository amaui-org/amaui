import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBookmarkCheck = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkCheck'

      short_name='BookmarkCheck'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m438-400 198-198-57-56-141 141-57-57-57 57 114 113ZM200-120v-720h560v720L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z"/>
    </Icon>
  );
});

IconMaterialBookmarkCheck.displayName = 'AmauiIconMaterialBookmarkCheck';

export default IconMaterialBookmarkCheck;
