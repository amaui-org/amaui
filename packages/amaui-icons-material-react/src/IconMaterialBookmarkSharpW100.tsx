import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBookmarkSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkSharpW100'
      short_name='Bookmark'

      {...props}
    >
      <path d="M7 17.95 12 15.8 17 17.95V5H7ZM6.3 19.05V4.3H17.7V19.05L12 16.6ZM7 5H17H12Z"/>
    </Icon>
  )
});

export default IconMaterialBookmarkSharpW100;
