import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBookmarksW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarksW100Filled'

      short_name='Bookmarks'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.7 18.05q-.15 0-.25-.1t-.1-.25V5.1q0-.3-.25-.55-.25-.25-.55-.25H8.3q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h9.25q.65 0 1.075.425.425.425.425 1.075v12.6q0 .15-.1.25t-.25.1ZM6 20.6q-.375.175-.713-.05-.337-.225-.337-.65V7.8q0-.65.425-1.075Q5.8 6.3 6.45 6.3h8.4q.65 0 1.075.425.425.425.425 1.075v12.1q0 .425-.337.65-.338.225-.713.05l-4.65-2Z"/>
    </Icon>
  );
});

IconMaterialBookmarksW100Filled.displayName = 'AmauiIconMaterialBookmarksW100Filled';

export default IconMaterialBookmarksW100Filled;
