import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVerticalAlignTopW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalAlignTopW100Filled'

      short_name='VerticalAlignTop'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 4.35q-.15 0-.25-.1T4.65 4q0-.15.1-.25t.25-.1h14q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm7 16q-.15 0-.25-.1t-.1-.25V9.25l-3.025 3.025q-.1.1-.225.1t-.25-.125q-.125-.125-.125-.25t.125-.25l3.325-3.325q.125-.125.25-.175.125-.05.275-.05.15 0 .275.05.125.05.25.175l3.35 3.35q.1.1.1.225t-.125.25q-.125.125-.25.125t-.25-.125l-3-3V20q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialVerticalAlignTopW100Filled.displayName = 'AmauiIconMaterialVerticalAlignTopW100Filled';

export default IconMaterialVerticalAlignTopW100Filled;
