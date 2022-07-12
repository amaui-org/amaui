import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBookmarkOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkOutlinedW100Filled'
      short_name='Bookmark'

      {...props}
    >
      <path d="M6.3 19.05V5.8Q6.3 5.15 6.725 4.725Q7.15 4.3 7.8 4.3H16.2Q16.85 4.3 17.275 4.725Q17.7 5.15 17.7 5.8V19.05L12 16.6Z"/>
    </Icon>
  )
});

export default IconMaterialBookmarkOutlinedW100Filled;
