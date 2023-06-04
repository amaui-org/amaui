import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCallMadeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallMadeW100Filled'

      short_name='CallMade'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.15 18.85q-.125-.125-.125-.25t.125-.25l12-12H10q-.15 0-.25-.1T9.65 6q0-.15.1-.25t.25-.1h7.6q.325 0 .538.212.212.213.212.538V14q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V6.85L5.625 18.875q-.1.1-.225.1t-.25-.125Z"/>
    </Icon>
  );
});

IconMaterialCallMadeW100Filled.displayName = 'AmauiIconMaterialCallMadeW100Filled';

export default IconMaterialCallMadeW100Filled;
