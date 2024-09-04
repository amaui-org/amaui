import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBookmarkFlagW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkFlagW100'

      short_name='BookmarkFlag'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M424-430v-106h134q9 0 13-8t-1-16l-30-40 30-40q5-8 1-16t-13-8H426q-13 0-21.5 8.5T396-634v204q0 6 4 10t10 4q6 0 10-4t4-10Zm56 134-144 62q-30 13-57-5t-27-50v-439q0-26 17-43t43-17h336q26 0 43 17t17 43v439q0 32-27 50t-57 5l-144-62Zm0-32 155 67q16 7 30.5-3t14.5-27v-437q0-12-10-22t-22-10H312q-12 0-22 10t-10 22v437q0 17 14.5 27t30.5 3l155-67Zm0-432H280h400-200Z"/>
    </Icon>
  );
});

IconMaterialBookmarkFlagW100.displayName = 'AmauiIconMaterialBookmarkFlagW100';

export default IconMaterialBookmarkFlagW100;
