import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBookmarkAddW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkAddW100Filled'

      short_name='BookmarkAdd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.35 9q-.15 0-.25-.1t-.1-.25V7h-1.65q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1H17V4.65q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V6.3h1.65q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H17.7v1.65q0 .15-.1.25t-.25.1Zm-10 9.6q-.375.175-.712-.05-.338-.225-.338-.65V5.8q0-.65.425-1.075Q7.15 4.3 7.8 4.3h5.9q-.35.55-.525 1.125Q13 6 13 6.65q0 1.725 1.163 2.963Q15.325 10.85 17 10.975q.2.025.35.025.15 0 .35-.025V17.9q0 .425-.337.65-.338.225-.713.05l-4.65-2Z"/>
    </Icon>
  );
});

IconMaterialBookmarkAddW100Filled.displayName = 'AmauiIconMaterialBookmarkAddW100Filled';

export default IconMaterialBookmarkAddW100Filled;
