import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBookmarkW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkW100'

      short_name='Bookmark'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m7 17.95 5-2.15 5 2.15V5H7Zm-.7 1.1V4.3h11.4v14.75L12 16.6ZM7 5h10-5Z"/>
    </Icon>
  );
});

IconMaterialBookmarkW100.displayName = 'AmauiIconMaterialBookmarkW100';

export default IconMaterialBookmarkW100;
