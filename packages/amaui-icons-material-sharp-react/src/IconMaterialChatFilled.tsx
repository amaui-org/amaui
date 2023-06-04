import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChatFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChatFilled'

      short_name='Chat'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 14h8v-2H6Zm0-3h12V9H6Zm0-3h12V6H6ZM2 22V2h20v16H6Z"/>
    </Icon>
  );
});

IconMaterialChatFilled.displayName = 'AmauiIconMaterialChatFilled';

export default IconMaterialChatFilled;
