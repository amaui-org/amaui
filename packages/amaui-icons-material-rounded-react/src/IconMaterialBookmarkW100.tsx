import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBookmarkW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkW100'

      short_name='Bookmark'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m7 17.95 5-2.15 5 2.15V5.8q0-.3-.25-.55Q16.5 5 16.2 5H7.8q-.3 0-.55.25Q7 5.5 7 5.8Zm.35.65q-.375.175-.712-.05-.338-.225-.338-.65V5.8q0-.65.425-1.075Q7.15 4.3 7.8 4.3h8.4q.65 0 1.075.425.425.425.425 1.075v12.1q0 .425-.337.65-.338.225-.713.05l-4.65-2ZM7 5H17h-5Z"/>
    </Icon>
  );
});

IconMaterialBookmarkW100.displayName = 'AmauiIconMaterialBookmarkW100';

export default IconMaterialBookmarkW100;
