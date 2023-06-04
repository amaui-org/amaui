import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBookmarkRemoveW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkRemoveW100'

      short_name='BookmarkRemove'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.3 19.05V4.3H13V5H7v12.95l5-2.15 5 2.15V11h.7v8.05L12 16.6ZM7 5h6-6Zm12.7 2H15v-.7h4.7Z"/>
    </Icon>
  );
});

IconMaterialBookmarkRemoveW100.displayName = 'AmauiIconMaterialBookmarkRemoveW100';

export default IconMaterialBookmarkRemoveW100;
