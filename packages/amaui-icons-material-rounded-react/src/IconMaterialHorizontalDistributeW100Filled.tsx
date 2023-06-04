import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHorizontalDistributeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HorizontalDistributeW100Filled'

      short_name='HorizontalDistribute'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.65 21.35q-.15 0-.25-.1T3.3 21V3q0-.15.1-.25t.25-.1q.15 0 .25.1T4 3v18q0 .15-.1.25t-.25.1Zm8.35-5q-.35 0-.6-.25t-.25-.6v-7q0-.35.25-.6t.6-.25q.35 0 .6.25t.25.6v7q0 .35-.25.6t-.6.25Zm8.35 5q-.15 0-.25-.1T20 21V3q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v18q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialHorizontalDistributeW100Filled.displayName = 'AmauiIconMaterialHorizontalDistributeW100Filled';

export default IconMaterialHorizontalDistributeW100Filled;
