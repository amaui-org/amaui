import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChatBubbleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChatBubbleW100Filled'

      short_name='ChatBubble'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 19.5V3.3h17.4v13.4H6.1Z"/>
    </Icon>
  );
});

IconMaterialChatBubbleW100Filled.displayName = 'AmauiIconMaterialChatBubbleW100Filled';

export default IconMaterialChatBubbleW100Filled;
