import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMarkChatUnreadW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkChatUnreadW100'

      short_name='MarkChatUnread'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 19.5V3.3h11.45q-.05.175-.062.337-.013.163-.038.363H4v13.8L5.8 16H20V8.475q.2-.05.363-.1.162-.05.337-.125v8.45H6.1ZM4 4.8v13V4 4.8Zm15 1.8q-.975 0-1.662-.688-.688-.687-.688-1.662 0-.975.688-1.663Q18.025 1.9 19 1.9q.975 0 1.663.687.687.688.687 1.663 0 .975-.687 1.662Q19.975 6.6 19 6.6Z"/>
    </Icon>
  );
});

IconMaterialMarkChatUnreadW100.displayName = 'AmauiIconMaterialMarkChatUnreadW100';

export default IconMaterialMarkChatUnreadW100;
