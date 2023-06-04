import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDensitySmallW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DensitySmallW100Filled'

      short_name='DensitySmall'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 3.35q-.15 0-.25-.1T3.65 3q0-.15.1-.25t.25-.1h16q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0 18q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h16q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0-6q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h16q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0-6q-.15 0-.25-.1T3.65 9q0-.15.1-.25t.25-.1h16q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialDensitySmallW100Filled.displayName = 'AmauiIconMaterialDensitySmallW100Filled';

export default IconMaterialDensitySmallW100Filled;
