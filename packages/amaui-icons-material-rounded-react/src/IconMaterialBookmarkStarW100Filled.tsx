import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBookmarkStarW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkStarW100Filled'

      short_name='BookmarkStar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-472 42 26q8 5 16.5-1t6.5-16l-12-48 38-32q8-7 4.5-16.5T562-570l-49-4-19-46q-4-9-14-9t-14 9l-19 46-49 4q-10 1-13.5 10.5T389-543l38 32-12 48q-2 10 6.5 16t16.5 1l42-26Zm0 176-144 62q-30 13-57-5t-27-50v-439q0-26 17-43t43-17h336q26 0 43 17t17 43v439q0 32-27 50t-57 5l-144-62Z"/>
    </Icon>
  );
});

IconMaterialBookmarkStarW100Filled.displayName = 'AmauiIconMaterialBookmarkStarW100Filled';

export default IconMaterialBookmarkStarW100Filled;
