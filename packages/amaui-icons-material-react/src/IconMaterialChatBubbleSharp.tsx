import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChatBubbleSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChatBubbleSharp'
      short_name='ChatBubble'

      {...props}
    >
      <path d="M2 22V2H22V18H6ZM4 17.175 5.175 16H20V4H4ZM4 17.175V4V16Z"/>
    </Icon>
  );
});

IconMaterialChatBubbleSharp.displayName = 'AmauiIconMaterialChatBubbleSharp';

export default IconMaterialChatBubbleSharp;
