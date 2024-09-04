import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBookmarkFlagW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkFlagW100Filled'

      short_name='BookmarkFlag'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M424-430v-106h134q9 0 13-8t-1-16l-30-40 30-40q5-8 1-16t-13-8H426q-13 0-21.5 8.5T396-634v204q0 6 4 10t10 4q6 0 10-4t4-10Zm56 134-144 62q-30 13-57-5t-27-50v-439q0-26 17-43t43-17h336q26 0 43 17t17 43v439q0 32-27 50t-57 5l-144-62Z"/>
    </Icon>
  );
});

IconMaterialBookmarkFlagW100Filled.displayName = 'AmauiIconMaterialBookmarkFlagW100Filled';

export default IconMaterialBookmarkFlagW100Filled;
