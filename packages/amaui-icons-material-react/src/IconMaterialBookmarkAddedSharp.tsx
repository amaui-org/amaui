import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBookmarkAddedSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkAddedSharp'
      short_name='BookmarkAdded'

      {...props}
    >
      <path d="M17.825 9 15 6.175 16.4 4.75 17.825 6.175 21.35 2.625 22.775 4.05ZM5 21V3H13Q13 3.575 13 4Q13 4.425 13 5H7V17.95L12 15.8L17 17.95V11Q17.575 11 18 11Q18.425 11 19 11V21L12 18ZM7 5H13Q13 5 13 5Q13 5 13 5Q13 5 13 5Q13 5 13 5H12H7Z"/>
    </Icon>
  );
});

IconMaterialBookmarkAddedSharp.displayName = 'AmauiIconMaterialBookmarkAddedSharp';

export default IconMaterialBookmarkAddedSharp;
