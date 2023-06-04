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
      <path d="M3.65 20.35v-.7h16.7v.7Zm0-16v-.7h16.7v.7Z"/>
    </Icon>
  );
});

IconMaterialDensityLargeW100Filled.displayName = 'AmauiIconMaterialDensityLargeW100Filled';

export default IconMaterialDensityLargeW100Filled;
