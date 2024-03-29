import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMarkChatUnreadFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkChatUnreadFilled'

      short_name='MarkChatUnread'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19 6q-1.25 0-2.125-.875T16 3q0-1.25.875-2.125T19 0q1.25 0 2.125.875T22 3q0 1.25-.875 2.125T19 6ZM2 22V2h12.1q-.1.5-.1 1t.1 1q.35 1.725 1.725 2.862Q17.2 8 19 8q.8 0 1.575-.25Q21.35 7.5 22 7v11H6Z"/>
    </Icon>
  );
});

IconMaterialMarkChatUnreadFilled.displayName = 'AmauiIconMaterialMarkChatUnreadFilled';

export default IconMaterialMarkChatUnreadFilled;
