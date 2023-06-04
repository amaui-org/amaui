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
      <path d="M7.35 18.6q-.375.175-.712-.05-.338-.225-.338-.65V5.8q0-.65.425-1.075Q7.15 4.3 7.8 4.3H13V5H7.8q-.3 0-.55.25Q7 5.5 7 5.8v12.15l5-2.15 5 2.15V11h.7v6.9q0 .425-.337.65-.338.225-.713.05l-4.65-2ZM7 5h6-1Zm10.35 4q-.15 0-.25-.1t-.1-.25V7h-1.65q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1H17V4.65q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V6.3h1.65q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H17.7v1.65q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialBookmarkAddW100.displayName = 'AmauiIconMaterialBookmarkAddW100';

export default IconMaterialBookmarkAddW100;
