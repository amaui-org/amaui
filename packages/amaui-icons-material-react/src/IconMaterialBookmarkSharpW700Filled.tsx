import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBookmarkSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkSharpW700Filled'
      short_name='Bookmark'

      {...props}
    >
      <path d="M4.15 22.275V2.15H19.85V22.275L12 18.925Z"/>
    </Icon>
  )
});

export default IconMaterialBookmarkSharpW700Filled;
