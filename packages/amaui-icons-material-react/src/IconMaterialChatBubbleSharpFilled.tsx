import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChatBubbleSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChatBubbleSharpFilled'
      short_name='ChatBubble'

      {...props}
    >
      <path d="M2 22V2H22V18H6Z"/>
    </Icon>
  );
});

export default IconMaterialChatBubbleSharpFilled;
