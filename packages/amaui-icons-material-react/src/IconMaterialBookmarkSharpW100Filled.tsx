import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBookmarkSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkSharpW100Filled'
      short_name='Bookmark'

      {...props}
    >
      <path d="M6.3 19.05V4.3H17.7V19.05L12 16.6Z"/>
    </Icon>
  );
});

export default IconMaterialBookmarkSharpW100Filled;
