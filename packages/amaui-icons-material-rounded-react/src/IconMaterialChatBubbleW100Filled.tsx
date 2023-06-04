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
      <path d="M3.3 17.7V4.8q0-.65.425-1.075Q4.15 3.3 4.8 3.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425H6.1l-1.525 1.525q-.35.35-.812.162Q3.3 18.2 3.3 17.7Z"/>
    </Icon>
  );
});

IconMaterialChatBubbleW100Filled.displayName = 'AmauiIconMaterialChatBubbleW100Filled';

export default IconMaterialChatBubbleW100Filled;
