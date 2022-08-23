import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBookmarksSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarksSharpFilled'
      short_name='Bookmarks'

      {...props}
    >
      <path d="M19 20V3H6V1H21V20ZM3 23V5H17V23L10 20Z"/>
    </Icon>
  );
});

IconMaterialBookmarksSharpFilled.displayName = 'AmauiIconMaterialBookmarksSharpFilled';

export default IconMaterialBookmarksSharpFilled;
