import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPowerInputW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerInputW100Filled'

      short_name='PowerInput'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 10.35q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h17q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0 4q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h3.025q.125 0 .225.1t.1.25q0 .15-.1.25t-.25.1Zm7 0q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h3q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm6.975 0q-.125 0-.225-.1t-.1-.25q0-.15.1-.25t.25-.1h3q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialPowerInputW100Filled.displayName = 'AmauiIconMaterialPowerInputW100Filled';

export default IconMaterialPowerInputW100Filled;
