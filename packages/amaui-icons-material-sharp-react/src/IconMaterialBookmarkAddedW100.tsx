import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBookmarkAddedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkAddedW100'

      short_name='BookmarkAdded'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.9 9 15 7.1l.475-.5L16.9 8.025l3.525-3.55.5.5ZM6.3 19.05V4.3H13V5H7v12.95l5-2.15 5 2.15V11h.7v8.05L12 16.6ZM7 5h6-6Z"/>
    </Icon>
  );
});

IconMaterialBookmarkAddedW100.displayName = 'AmauiIconMaterialBookmarkAddedW100';

export default IconMaterialBookmarkAddedW100;
