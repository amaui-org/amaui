import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBookmarksSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarksSharpW100Filled'
      short_name='Bookmarks'

      {...props}
    >
      <path d="M18.35 18.05V4.3H7.95V3.6H19.05V18.05ZM4.95 21.05V6.3H16.35V21.05L10.65 18.6Z"/>
    </Icon>
  );
});

IconMaterialBookmarksSharpW100Filled.displayName = 'AmauiIconMaterialBookmarksSharpW100Filled';

export default IconMaterialBookmarksSharpW100Filled;
