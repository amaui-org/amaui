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
      <path d="M5 21V3h8v2H7v12.95l5-2.15 5 2.15V11h2v10l-7-3ZM7 5h6-6Zm14 2h-6V5h6Z"/>
    </Icon>
  );
});

IconMaterialBookmarkRemove.displayName = 'AmauiIconMaterialBookmarkRemove';

export default IconMaterialBookmarkRemove;
