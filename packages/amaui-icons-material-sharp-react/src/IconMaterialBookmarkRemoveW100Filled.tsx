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
      <path d="M19.7 7H15v-.7h4.7ZM6.3 19.05V4.3h7.4q-.35.55-.525 1.125Q13 6 13 6.65q0 1.725 1.163 2.963Q15.325 10.85 17 10.975q.2.025.35.025.15 0 .35-.025v8.075L12 16.6Z"/>
    </Icon>
  );
});

IconMaterialBookmarkRemoveW100Filled.displayName = 'AmauiIconMaterialBookmarkRemoveW100Filled';

export default IconMaterialBookmarkRemoveW100Filled;
