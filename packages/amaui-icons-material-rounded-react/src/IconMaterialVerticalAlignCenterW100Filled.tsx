import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVerticalAlignCenterW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalAlignCenterW100Filled'

      short_name='VerticalAlignCenter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21.35q-.15 0-.25-.1t-.1-.25v-4.75l-2.025 2.025q-.1.1-.225.1t-.25-.125q-.125-.125-.125-.25t.125-.25l2.325-2.325q.125-.125.25-.175.125-.05.275-.05.15 0 .275.05.125.05.25.175l2.35 2.35q.1.1.1.225t-.125.25q-.125.125-.25.125t-.25-.125l-2-2V21q0 .15-.1.25t-.25.1Zm-7-9q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h14q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm7-3.55q-.15 0-.275-.05-.125-.05-.25-.175l-2.35-2.35q-.1-.1-.1-.225t.125-.25q.125-.125.25-.125t.25.125l2 2V3q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v4.75l2.025-2.025q.1-.1.225-.1t.25.125q.125.125.125.25t-.125.25l-2.325 2.325q-.125.125-.25.175-.125.05-.275.05Z"/>
    </Icon>
  );
});

IconMaterialVerticalAlignCenterW100Filled.displayName = 'AmauiIconMaterialVerticalAlignCenterW100Filled';

export default IconMaterialVerticalAlignCenterW100Filled;
