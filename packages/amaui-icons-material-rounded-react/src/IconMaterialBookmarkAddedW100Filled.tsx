import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBookmarkAddedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkAddedW100Filled'

      short_name='BookmarkAdded'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.9 8.7q-.15 0-.275-.05-.125-.05-.25-.175l-1.15-1.15q-.1-.1-.1-.225t.125-.25q.1-.1.238-.1.137 0 .237.1L16.9 8.025 20.2 4.7q.1-.1.225-.1t.25.125q.125.125.125.25t-.125.25l-3.25 3.25q-.125.125-.25.175-.125.05-.275.05Zm-9.55 9.9q-.375.175-.712-.05-.338-.225-.338-.65V5.8q0-.65.425-1.075Q7.15 4.3 7.8 4.3h5.9q-.35.55-.525 1.125Q13 6 13 6.65q0 1.725 1.163 2.963Q15.325 10.85 17 10.975q.2.025.35.025.15 0 .35-.025V17.9q0 .425-.337.65-.338.225-.713.05l-4.65-2Z"/>
    </Icon>
  );
});

IconMaterialBookmarkAddedW100Filled.displayName = 'AmauiIconMaterialBookmarkAddedW100Filled';

export default IconMaterialBookmarkAddedW100Filled;
