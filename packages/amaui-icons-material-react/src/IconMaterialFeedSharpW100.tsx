import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFeedSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FeedSharpW100'
      short_name='Feed'

      {...props}
    >
      <path d="M4.3 19.7V4.3H15.45L19.7 8.55V19.7ZM5 19H19V9H15V5H5ZM7.65 15.7H16.35V15H7.65ZM7.65 9H12V8.3H7.65ZM7.65 12.35H16.35V11.65H7.65ZM5 5V9V5V9V19Z"/>
    </Icon>
  )
});

export default IconMaterialFeedSharpW100;
