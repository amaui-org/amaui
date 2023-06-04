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
      <path d="M16.9 9 15 7.1l.475-.5L16.9 8.025l3.525-3.55.5.5ZM6.3 19.05V4.3h7.4q-.35.55-.525 1.125Q13 6 13 6.65q0 1.725 1.163 2.963Q15.325 10.85 17 10.975q.2.025.35.025.15 0 .35-.025v8.075L12 16.6Z"/>
    </Icon>
  );
});

IconMaterialBookmarkAddedW100Filled.displayName = 'AmauiIconMaterialBookmarkAddedW100Filled';

export default IconMaterialBookmarkAddedW100Filled;
