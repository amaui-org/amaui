import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSkipNextW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SkipNextW100Filled'

      short_name='SkipNext'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.55 16.2q-.15 0-.25-.1t-.1-.25v-7.7q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v7.7q0 .15-.1.25t-.25.1Zm-8.275-.775q-.375.275-.775.05-.4-.225-.4-.675V9.2q0-.45.4-.675.4-.225.775.05l4.2 2.8q.325.225.325.625t-.325.625Z"/>
    </Icon>
  );
});

IconMaterialSkipNextW100Filled.displayName = 'AmauiIconMaterialSkipNextW100Filled';

export default IconMaterialSkipNextW100Filled;
