import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFeedOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FeedOutlinedW100Filled'
      short_name='Feed'

      {...props}
    >
      <path d="M5 19.7Q4.7 19.7 4.5 19.5Q4.3 19.3 4.3 19V5Q4.3 4.7 4.5 4.5Q4.7 4.3 5 4.3H15.45L19.7 8.55V19Q19.7 19.3 19.5 19.5Q19.3 19.7 19 19.7ZM15 9H19L15 5ZM7.65 9H12V8.3H7.65ZM7.65 12.35H16.35V11.65H7.65ZM7.65 15.7H16.35V15H7.65Z"/>
    </Icon>
  )
});

export default IconMaterialFeedOutlinedW100Filled;
