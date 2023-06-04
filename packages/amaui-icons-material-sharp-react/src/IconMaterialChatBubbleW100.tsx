import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChatBubbleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChatBubbleW100'

      short_name='ChatBubble'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 19.5V3.3h17.4v13.4H6.1Zm.7-1.7L5.8 16H20V4H4Zm0 0V4v12Z"/>
    </Icon>
  );
});

IconMaterialChatBubbleW100.displayName = 'AmauiIconMaterialChatBubbleW100';

export default IconMaterialChatBubbleW100;
