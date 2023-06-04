import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBookmarks = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Bookmarks'

      short_name='Bookmarks'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19 20V3H6V1h15v19Zm-14-.05 5-2.15 5 2.15V7H5ZM3 23V5h14v18l-7-3ZM5 7h10H5Z"/>
    </Icon>
  );
});

IconMaterialBookmarks.displayName = 'AmauiIconMaterialBookmarks';

export default IconMaterialBookmarks;
