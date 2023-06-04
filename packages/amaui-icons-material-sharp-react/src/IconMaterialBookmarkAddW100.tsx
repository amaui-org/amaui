import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBookmarkAddW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkAddW100'

      short_name='BookmarkAdd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.3 19.05V4.3H13V5H7v12.95l5-2.15 5 2.15V11h.7v8.05L12 16.6ZM7 5h6-6Zm10 4V7h-2v-.7h2v-2h.7v2h2V7h-2v2Z"/>
    </Icon>
  );
});

IconMaterialBookmarkAddW100.displayName = 'AmauiIconMaterialBookmarkAddW100';

export default IconMaterialBookmarkAddW100;
