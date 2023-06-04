import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPanToolAltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanToolAltW100Filled'

      short_name='PanToolAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10.175 19.7-4.5-4.45.75-.75 3.8.75V5.5q0-.5.35-.85t.85-.35q.5 0 .85.35t.35.85v5.3h1.2l4.8 2.35-1.15 6.55Z"/>
    </Icon>
  );
});

IconMaterialPanToolAltW100Filled.displayName = 'AmauiIconMaterialPanToolAltW100Filled';

export default IconMaterialPanToolAltW100Filled;
