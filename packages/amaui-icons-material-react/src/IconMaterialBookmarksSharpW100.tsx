import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBookmarksSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarksSharpW100'
      short_name='Bookmarks'

      {...props}
    >
      <path d="M18.35 18.05V4.3H7.95V3.6H19.05V18.05ZM5.65 19.95 10.65 17.8 15.65 19.95V7H5.65ZM4.95 21.05V6.3H16.35V21.05L10.65 18.6ZM5.65 7H15.65H10.65H5.65Z"/>
    </Icon>
  )
});

export default IconMaterialBookmarksSharpW100;
