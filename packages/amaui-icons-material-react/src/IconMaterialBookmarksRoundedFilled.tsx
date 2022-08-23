import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBookmarksRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarksRoundedFilled'
      short_name='Bookmarks'

      {...props}
    >
      <path d="M20 20Q19.575 20 19.288 19.712Q19 19.425 19 19V3Q19 3 19 3Q19 3 19 3H7Q6.575 3 6.287 2.712Q6 2.425 6 2Q6 1.575 6.287 1.287Q6.575 1 7 1H19Q19.825 1 20.413 1.587Q21 2.175 21 3V19Q21 19.425 20.712 19.712Q20.425 20 20 20ZM4.4 22.4Q3.9 22.6 3.45 22.312Q3 22.025 3 21.475V7Q3 6.175 3.587 5.588Q4.175 5 5 5H15Q15.825 5 16.413 5.588Q17 6.175 17 7V21.475Q17 22.025 16.55 22.312Q16.1 22.6 15.6 22.4L10 20Z"/>
    </Icon>
  );
});

IconMaterialBookmarksRoundedFilled.displayName = 'AmauiIconMaterialBookmarksRoundedFilled';

export default IconMaterialBookmarksRoundedFilled;
