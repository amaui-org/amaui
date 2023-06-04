import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBookmarkRemoveW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkRemoveW100Filled'

      short_name='BookmarkRemove'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.35 7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h4q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm-8 11.6q-.375.175-.712-.05-.338-.225-.338-.65V5.8q0-.65.425-1.075Q7.15 4.3 7.8 4.3h5.9q-.35.55-.525 1.125Q13 6 13 6.65q0 1.725 1.163 2.963Q15.325 10.85 17 10.975q.2.025.35.025.15 0 .35-.025V17.9q0 .425-.337.65-.338.225-.713.05l-4.65-2Z"/>
    </Icon>
  );
});

IconMaterialBookmarkRemoveW100Filled.displayName = 'AmauiIconMaterialBookmarkRemoveW100Filled';

export default IconMaterialBookmarkRemoveW100Filled;
