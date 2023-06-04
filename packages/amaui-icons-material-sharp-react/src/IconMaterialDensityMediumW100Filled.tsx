import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDensityMediumW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DensityMediumW100Filled'

      short_name='DensityMedium'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.65 20.35v-.7h16.7v.7Zm0-8v-.7h16.7v.7Zm0-8v-.7h16.7v.7Z"/>
    </Icon>
  );
});

IconMaterialDensityMediumW100Filled.displayName = 'AmauiIconMaterialDensityMediumW100Filled';

export default IconMaterialDensityMediumW100Filled;
