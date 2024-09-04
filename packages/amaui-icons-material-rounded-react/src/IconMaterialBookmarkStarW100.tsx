import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBookmarkStarW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkStarW100'

      short_name='BookmarkStar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-472 42 26q8 5 16.5-1t6.5-16l-12-48 38-32q8-7 4.5-16.5T562-570l-49-4-19-46q-4-9-14-9t-14 9l-19 46-49 4q-10 1-13.5 10.5T389-543l38 32-12 48q-2 10 6.5 16t16.5 1l42-26Zm0 176-144 62q-30 13-57-5t-27-50v-439q0-26 17-43t43-17h336q26 0 43 17t17 43v439q0 32-27 50t-57 5l-144-62Zm0-32 155 67q16 7 30.5-3t14.5-27v-437q0-12-10-22t-22-10H312q-12 0-22 10t-10 22v437q0 17 14.5 27t30.5 3l155-67Zm0-432H280h400-200Z"/>
    </Icon>
  );
});

IconMaterialBookmarkStarW100.displayName = 'AmauiIconMaterialBookmarkStarW100';

export default IconMaterialBookmarkStarW100;
