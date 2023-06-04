import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBookmarkFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkFilled'

      short_name='Bookmark'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21V3h14v18l-7-3Z"/>
    </Icon>
  );
});

IconMaterialBookmarkFilled.displayName = 'AmauiIconMaterialBookmarkFilled';

export default IconMaterialBookmarkFilled;
