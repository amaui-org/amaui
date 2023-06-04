import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDensityMedium = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DensityMedium'

      short_name='DensityMedium'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21v-2h18v2Zm0-8v-2h18v2Zm0-8V3h18v2Z"/>
    </Icon>
  );
});

IconMaterialDensityMedium.displayName = 'AmauiIconMaterialDensityMedium';

export default IconMaterialDensityMedium;
