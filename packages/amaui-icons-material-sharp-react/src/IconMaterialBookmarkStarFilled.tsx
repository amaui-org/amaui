import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBookmarkStarFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkStarFilled'

      short_name='BookmarkStar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m389-400 91-55 91 55-24-104 80-69-105-9-42-98-42 98-105 9 80 69-24 104ZM200-120v-720h560v720L480-240 200-120Z"/>
    </Icon>
  );
});

IconMaterialBookmarkStarFilled.displayName = 'AmauiIconMaterialBookmarkStarFilled';

export default IconMaterialBookmarkStarFilled;
