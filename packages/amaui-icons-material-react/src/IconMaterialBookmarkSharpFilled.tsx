import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBookmarkSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkSharpFilled'
      short_name='Bookmark'

      {...props}
    >
      <path d="M5 21V3H19V21L12 18Z"/>
    </Icon>
  )
});

export default IconMaterialBookmarkSharpFilled;
