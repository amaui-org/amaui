import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChatBubbleSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChatBubbleSharpW100'
      short_name='ChatBubble'

      {...props}
    >
      <path d="M3.3 19.5V3.3H20.7V16.7H6.1ZM4 17.8 5.8 16H20V4H4ZM4 17.8V4V16Z"/>
    </Icon>
  );
});

IconMaterialChatBubbleSharpW100.displayName = 'AmauiIconMaterialChatBubbleSharpW100';

export default IconMaterialChatBubbleSharpW100;
