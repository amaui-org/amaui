import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChatBubbleSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChatBubbleSharpW700Filled'
      short_name='ChatBubble'

      {...props}
    >
      <path d="M1.15 22.85V1.15H22.85V18.85H5.15Z"/>
    </Icon>
  )
});

export default IconMaterialChatBubbleSharpW700Filled;
