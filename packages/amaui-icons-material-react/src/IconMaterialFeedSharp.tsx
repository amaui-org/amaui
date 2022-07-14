import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFeedSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FeedSharp'
      short_name='Feed'

      {...props}
    >
      <path d="M3 21V3H16L21 8V21ZM5 19H19V9H15V5H5ZM7 17H17V15H7ZM7 9H12V7H7ZM7 13H17V11H7ZM5 5V9V5V9V19Z"/>
    </Icon>
  );
});

export default IconMaterialFeedSharp;
