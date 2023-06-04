import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBookmarkAdd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkAdd'

      short_name='BookmarkAdd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21V3h8v2H7v12.95l5-2.15 5 2.15V11h2v10l-7-3ZM7 5h6-6Zm10 4V7h-2V5h2V3h2v2h2v2h-2v2Z"/>
    </Icon>
  );
});

IconMaterialBookmarkAdd.displayName = 'AmauiIconMaterialBookmarkAdd';

export default IconMaterialBookmarkAdd;
