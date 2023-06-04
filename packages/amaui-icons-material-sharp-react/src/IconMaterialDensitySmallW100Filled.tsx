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
      <path d="M3.65 21.35v-.7h16.7v.7Zm0-6v-.7h16.7v.7Zm0-6v-.7h16.7v.7Zm0-6v-.7h16.7v.7Z"/>
    </Icon>
  );
});

IconMaterialDensitySmallW100Filled.displayName = 'AmauiIconMaterialDensitySmallW100Filled';

export default IconMaterialDensitySmallW100Filled;
