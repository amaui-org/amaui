import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBookmarksFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarksFilled'

      short_name='Bookmarks'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19 20V3H6V1h15v19ZM3 23V5h14v18l-7-3Z"/>
    </Icon>
  );
});

IconMaterialBookmarksFilled.displayName = 'AmauiIconMaterialBookmarksFilled';

export default IconMaterialBookmarksFilled;
