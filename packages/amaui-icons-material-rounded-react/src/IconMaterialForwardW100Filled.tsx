import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialForwardW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForwardW100Filled'

      short_name='Forward'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.125 18.35q-.15 0-.25-.1t-.1-.25v-3q0-1.8 1.275-3.075 1.275-1.275 3.075-1.275h10.75L14.85 6.625q-.1-.1-.1-.225t.125-.25q.125-.125.25-.125t.25.125l4.325 4.325q.125.125.175.25.05.125.05.275 0 .15-.05.275-.05.125-.175.25l-4.35 4.35q-.1.1-.225.1t-.25-.125q-.125-.125-.125-.25t.125-.25l4-4H8.125q-1.525 0-2.587 1.062Q4.475 13.475 4.475 15v3q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialForwardW100Filled.displayName = 'AmauiIconMaterialForwardW100Filled';

export default IconMaterialForwardW100Filled;
