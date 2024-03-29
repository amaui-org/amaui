import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMarkUnreadChatAltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkUnreadChatAltFilled'

      short_name='MarkUnreadChatAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19 6q-1.25 0-2.125-.875T16 3q0-1.25.875-2.125T19 0q1.25 0 2.125.875T22 3q0 1.25-.875 2.125T19 6ZM2 22V2h12.1q-.1.5-.1 1t.1 1q.125.575.35 1.075.225.5.55.925H6v2h13q.8 0 1.575-.25Q21.35 7.5 22 7v11H6Zm4-11h12V9H6Zm0 3h8v-2H6Z"/>
    </Icon>
  );
});

IconMaterialMarkUnreadChatAltFilled.displayName = 'AmauiIconMaterialMarkUnreadChatAltFilled';

export default IconMaterialMarkUnreadChatAltFilled;
