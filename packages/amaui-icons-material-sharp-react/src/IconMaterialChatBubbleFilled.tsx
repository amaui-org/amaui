import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChatBubbleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChatBubbleFilled'

      short_name='ChatBubble'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 22V2h20v16H6Z"/>
    </Icon>
  );
});

IconMaterialChatBubbleFilled.displayName = 'AmauiIconMaterialChatBubbleFilled';

export default IconMaterialChatBubbleFilled;
