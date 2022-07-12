import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChatBubbleSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChatBubbleSharpW100Filled'
      short_name='ChatBubble'

      {...props}
    >
      <path d="M3.3 19.5V3.3H20.7V16.7H6.1Z"/>
    </Icon>
  )
});

export default IconMaterialChatBubbleSharpW100Filled;
