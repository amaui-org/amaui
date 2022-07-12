import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBookmarkRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkRoundedFilled'
      short_name='Bookmark'

      {...props}
    >
      <path d="M6.4 20.4Q5.9 20.6 5.45 20.312Q5 20.025 5 19.475V5Q5 4.175 5.588 3.587Q6.175 3 7 3H17Q17.825 3 18.413 3.587Q19 4.175 19 5V19.475Q19 20.025 18.55 20.312Q18.1 20.6 17.6 20.4L12 18Z"/>
    </Icon>
  )
});

export default IconMaterialBookmarkRoundedFilled;
