import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMarkChatReadFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkChatReadFilled'

      short_name='MarkChatRead'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m17.35 20-3.525-3.55 1.4-1.4 2.125 2.125 4.25-4.25L23 14.35ZM2 22V2h20v9H12v7H6Z"/>
    </Icon>
  );
});

IconMaterialMarkChatReadFilled.displayName = 'AmauiIconMaterialMarkChatReadFilled';

export default IconMaterialMarkChatReadFilled;
