import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRttW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RttW100Filled'

      short_name='Rtt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10.725 20.05.1-.7h2.35l2.3-14.75h-4.45l-.7 4.5h-.7l.8-5.2h11l-.8 5.2h-.7l.7-4.5h-4.45l-2.3 14.75h2.35l-.1.7Zm-6.45-13.7.1-.7H8.65l-.1.7Zm-.6 4 .1-.7H8.05l-.1.7Zm-1.1 8 .1-.7h6.5l-.1.7Zm.65-4 .1-.7h6.5l-.1.7Z"/>
    </Icon>
  );
});

IconMaterialRttW100Filled.displayName = 'AmauiIconMaterialRttW100Filled';

export default IconMaterialRttW100Filled;
