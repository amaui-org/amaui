import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDensityLargeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DensityLargeW100Filled'

      short_name='DensityLarge'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 4.35q-.15 0-.25-.1T3.65 4q0-.15.1-.25t.25-.1h16q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0 16q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h16q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialDensityLargeW100Filled.displayName = 'AmauiIconMaterialDensityLargeW100Filled';

export default IconMaterialDensityLargeW100Filled;
