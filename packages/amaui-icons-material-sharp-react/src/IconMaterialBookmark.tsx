import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBookmark = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Bookmark'

      short_name='Bookmark'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m7 17.95 5-2.15 5 2.15V5H7ZM5 21V3h14v18l-7-3ZM7 5h10-5Z"/>
    </Icon>
  );
});

IconMaterialBookmark.displayName = 'AmauiIconMaterialBookmark';

export default IconMaterialBookmark;
