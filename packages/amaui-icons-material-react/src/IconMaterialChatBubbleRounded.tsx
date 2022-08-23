import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChatBubbleRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChatBubbleRounded'
      short_name='ChatBubble'

      {...props}
    >
      <path d="M2 19.575V4Q2 3.175 2.588 2.587Q3.175 2 4 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V16Q22 16.825 21.413 17.413Q20.825 18 20 18H6L3.7 20.3Q3.225 20.775 2.612 20.512Q2 20.25 2 19.575ZM4 17.175 5.175 16H20Q20 16 20 16Q20 16 20 16V4Q20 4 20 4Q20 4 20 4H4Q4 4 4 4Q4 4 4 4ZM4 4Q4 4 4 4Q4 4 4 4Q4 4 4 4Q4 4 4 4V16Q4 16 4 16Q4 16 4 16V17.175Z"/>
    </Icon>
  );
});

IconMaterialChatBubbleRounded.displayName = 'AmauiIconMaterialChatBubbleRounded';

export default IconMaterialChatBubbleRounded;
