import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChatBubbleOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChatBubbleOutlinedW100Filled'
      short_name='ChatBubble'

      {...props}
    >
      <path d="M3.3 19.5V4.8Q3.3 4.15 3.725 3.725Q4.15 3.3 4.8 3.3H19.2Q19.85 3.3 20.275 3.725Q20.7 4.15 20.7 4.8V15.2Q20.7 15.85 20.275 16.275Q19.85 16.7 19.2 16.7H6.1Z"/>
    </Icon>
  )
});

export default IconMaterialChatBubbleOutlinedW100Filled;
