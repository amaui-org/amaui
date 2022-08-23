import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBookmarkRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkRounded'
      short_name='Bookmark'

      {...props}
    >
      <path d="M7 17.95 12 15.8 17 17.95V5Q17 5 17 5Q17 5 17 5H7Q7 5 7 5Q7 5 7 5ZM6.4 20.4Q5.9 20.6 5.45 20.312Q5 20.025 5 19.475V5Q5 4.175 5.588 3.587Q6.175 3 7 3H17Q17.825 3 18.413 3.587Q19 4.175 19 5V19.475Q19 20.025 18.55 20.312Q18.1 20.6 17.6 20.4L12 18ZM7 5Q7 5 7 5Q7 5 7 5H17Q17 5 17 5Q17 5 17 5H12Z"/>
    </Icon>
  );
});

IconMaterialBookmarkRounded.displayName = 'AmauiIconMaterialBookmarkRounded';

export default IconMaterialBookmarkRounded;
