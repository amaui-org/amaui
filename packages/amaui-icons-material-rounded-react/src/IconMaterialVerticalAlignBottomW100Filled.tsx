import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVerticalAlignBottomW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalAlignBottomW100Filled'

      short_name='VerticalAlignBottom'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 20.35q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h14q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm7-4.55q-.15 0-.275-.05-.125-.05-.25-.175l-3.35-3.35q-.1-.1-.1-.225t.125-.25q.125-.125.25-.125t.25.125l3 3V4q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v10.75l3.025-3.025q.1-.1.225-.1t.25.125q.125.125.125.25t-.125.25l-3.325 3.325q-.125.125-.25.175-.125.05-.275.05Z"/>
    </Icon>
  );
});

IconMaterialVerticalAlignBottomW100Filled.displayName = 'AmauiIconMaterialVerticalAlignBottomW100Filled';

export default IconMaterialVerticalAlignBottomW100Filled;
