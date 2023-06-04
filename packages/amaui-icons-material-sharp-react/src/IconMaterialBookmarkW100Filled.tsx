import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBookmarkW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkW100Filled'

      short_name='Bookmark'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.3 19.05V4.3h11.4v14.75L12 16.6Z"/>
    </Icon>
  );
});

IconMaterialBookmarkW100Filled.displayName = 'AmauiIconMaterialBookmarkW100Filled';

export default IconMaterialBookmarkW100Filled;
