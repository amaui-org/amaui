import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChatBubbleTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChatBubbleTwoTone'
      short_name='ChatBubble'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 18l2-2h14V4H4z" opacity=".3"/><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
    </Icon>
  );
});

IconMaterialChatBubbleTwoTone.displayName = 'AmauiIconMaterialChatBubbleTwoTone';

export default IconMaterialChatBubbleTwoTone;
