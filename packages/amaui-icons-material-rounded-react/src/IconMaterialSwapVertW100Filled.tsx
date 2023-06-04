import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwapVertW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwapVertW100Filled'

      short_name='SwapVert'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.65 19.75V12q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v7.75l3.025-3.025q.1-.1.225-.1t.25.125q.125.125.125.25t-.125.25l-3.325 3.325q-.125.125-.25.175-.125.05-.275.05-.15 0-.275-.05-.125-.05-.25-.175l-3.35-3.35q-.1-.1-.1-.225t.125-.25q.125-.125.25-.125t.25.125Zm-6-15.5L5.625 7.275q-.1.1-.225.1t-.25-.125q-.125-.125-.125-.25t.125-.25l3.325-3.325q.125-.125.25-.175Q8.85 3.2 9 3.2q.15 0 .275.05.125.05.25.175l3.35 3.35q.1.1.1.225t-.125.25q-.125.125-.25.125t-.25-.125l-3-3V12q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25Z"/>
    </Icon>
  );
});

IconMaterialSwapVertW100Filled.displayName = 'AmauiIconMaterialSwapVertW100Filled';

export default IconMaterialSwapVertW100Filled;
