import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChat = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Chat'

      short_name='Chat'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 14h8v-2H6Zm0-3h12V9H6Zm0-3h12V6H6ZM2 22V2h20v16H6Zm2-4.825L5.175 16H20V4H4Zm0 0V4v12Z"/>
    </Icon>
  );
});

IconMaterialChat.displayName = 'AmauiIconMaterialChat';

export default IconMaterialChat;
