import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChatBubble = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChatBubble'

      short_name='ChatBubble'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 22V2h20v16H6Zm2-4.825L5.175 16H20V4H4Zm0 0V4v12Z"/>
    </Icon>
  );
});

IconMaterialChatBubble.displayName = 'AmauiIconMaterialChatBubble';

export default IconMaterialChatBubble;
