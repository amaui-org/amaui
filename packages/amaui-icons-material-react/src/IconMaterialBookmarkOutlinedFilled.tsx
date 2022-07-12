import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBookmarkOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkOutlinedFilled'
      short_name='Bookmark'

      {...props}
    >
      <path d="M5 21V5Q5 4.175 5.588 3.587Q6.175 3 7 3H17Q17.825 3 18.413 3.587Q19 4.175 19 5V21L12 18Z"/>
    </Icon>
  )
});

export default IconMaterialBookmarkOutlinedFilled;
