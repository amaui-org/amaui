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
      <path d="M6.3 19.05V4.3h7.4q-.35.55-.525 1.125Q13 6 13 6.65q0 1.725 1.163 2.963Q15.325 10.85 17 10.975q.2.025.35.025.15 0 .35-.025v8.075L12 16.6ZM17 9V7h-2v-.7h2v-2h.7v2h2V7h-2v2Z"/>
    </Icon>
  );
});

IconMaterialBookmarkAddW100Filled.displayName = 'AmauiIconMaterialBookmarkAddW100Filled';

export default IconMaterialBookmarkAddW100Filled;
