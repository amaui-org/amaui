import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBookmarkW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkW100Filled'

      short_name='Bookmark'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.35 18.6q-.375.175-.712-.05-.338-.225-.338-.65V5.8q0-.65.425-1.075Q7.15 4.3 7.8 4.3h8.4q.65 0 1.075.425.425.425.425 1.075v12.1q0 .425-.337.65-.338.225-.713.05l-4.65-2Z"/>
    </Icon>
  );
});

IconMaterialBookmarkW100Filled.displayName = 'AmauiIconMaterialBookmarkW100Filled';

export default IconMaterialBookmarkW100Filled;
