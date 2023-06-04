import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExpandW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExpandW100Filled'

      short_name='Expand'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21.35q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h14q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0-18q-.15 0-.25-.1T4.65 3q0-.15.1-.25t.25-.1h14q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm7 14.45q-.15 0-.275-.05-.125-.05-.25-.175l-2.35-2.35q-.1-.1-.1-.225t.125-.25q.125-.125.25-.125t.25.125l2 2v-9.5L9.625 9.275q-.1.1-.225.1t-.25-.125q-.125-.125-.125-.25t.125-.25l2.325-2.325q.125-.125.25-.175.125-.05.275-.05.15 0 .275.05.125.05.25.175l2.35 2.35q.1.1.1.225t-.125.25q-.125.125-.25.125t-.25-.125l-2-2v9.5l2.025-2.025q.1-.1.225-.1t.25.125q.125.125.125.25t-.125.25l-2.325 2.325q-.125.125-.25.175-.125.05-.275.05Z"/>
    </Icon>
  );
});

IconMaterialExpandW100Filled.displayName = 'AmauiIconMaterialExpandW100Filled';

export default IconMaterialExpandW100Filled;
