import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBookmarksSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarksSharp'
      short_name='Bookmarks'

      {...props}
    >
      <path d="M19 20V3H6V1H21V20ZM5 19.95 10 17.8 15 19.95V7H5ZM3 23V5H17V23L10 20ZM5 7H15H10H5Z"/>
    </Icon>
  );
});

export default IconMaterialBookmarksSharp;
