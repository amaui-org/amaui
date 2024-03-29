import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMarkChatUnread = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkChatUnread'

      short_name='MarkChatUnread'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 22V2h12.1q-.1.5-.1 1t.1 1H4v12h16V7.9q.575-.125 1.075-.338.5-.212.925-.562v11H6ZM4 4v12V4Zm15 2q-1.25 0-2.125-.875T16 3q0-1.25.875-2.125T19 0q1.25 0 2.125.875T22 3q0 1.25-.875 2.125T19 6Z"/>
    </Icon>
  );
});

IconMaterialMarkChatUnread.displayName = 'AmauiIconMaterialMarkChatUnread';

export default IconMaterialMarkChatUnread;
