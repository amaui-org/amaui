import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLandscapeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LandscapeW100Filled'

      short_name='Landscape'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m3.475 16.7 3.65-4.9 3.15 4.2h2.55l-2.3-3.05 3.6-4.8 6.4 8.55Z"/>
    </Icon>
  );
});

IconMaterialLandscapeW100Filled.displayName = 'AmauiIconMaterialLandscapeW100Filled';

export default IconMaterialLandscapeW100Filled;
