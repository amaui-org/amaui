import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBookmarkAdded = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkAdded'

      short_name='BookmarkAdded'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.825 9 15 6.175l1.4-1.425 1.425 1.425 3.525-3.55 1.425 1.425ZM5 21V3h8v2H7v12.95l5-2.15 5 2.15V11h2v10l-7-3ZM7 5h6-6Z"/>
    </Icon>
  );
});

IconMaterialBookmarkAdded.displayName = 'AmauiIconMaterialBookmarkAdded';

export default IconMaterialBookmarkAdded;
