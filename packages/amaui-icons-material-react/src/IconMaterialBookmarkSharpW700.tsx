import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBookmarkSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkSharpW700'
      short_name='Bookmark'

      {...props}
    >
      <path d="M7.3 17.5 12 15.5 16.7 17.5V5.3H7.3ZM4.15 22.275V2.15H19.85V22.275L12 18.925ZM7.3 5.3H16.7H12Z"/>
    </Icon>
  )
});

export default IconMaterialBookmarkSharpW700;
