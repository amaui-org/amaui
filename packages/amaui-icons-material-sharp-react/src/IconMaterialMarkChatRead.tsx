import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMarkChatRead = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkChatRead'

      short_name='MarkChatRead'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m17.35 20-3.525-3.55 1.4-1.4 2.125 2.125 4.25-4.25L23 14.35ZM2 22V2h20v9h-2V4H4v12h8v2H6Zm2-6V4Z"/>
    </Icon>
  );
});

IconMaterialMarkChatRead.displayName = 'AmauiIconMaterialMarkChatRead';

export default IconMaterialMarkChatRead;
