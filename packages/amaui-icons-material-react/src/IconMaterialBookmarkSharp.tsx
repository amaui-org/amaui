import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBookmarkSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkSharp'
      short_name='Bookmark'

      {...props}
    >
      <path d="M7 17.95 12 15.8 17 17.95V5H7ZM5 21V3H19V21L12 18ZM7 5H17H12Z"/>
    </Icon>
  );
});

IconMaterialBookmarkSharp.displayName = 'AmauiIconMaterialBookmarkSharp';

export default IconMaterialBookmarkSharp;
