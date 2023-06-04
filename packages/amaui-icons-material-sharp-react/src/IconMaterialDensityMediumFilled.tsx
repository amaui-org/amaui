import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDensityMediumFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DensityMediumFilled'

      short_name='DensityMedium'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21v-2h18v2Zm0-8v-2h18v2Zm0-8V3h18v2Z"/>
    </Icon>
  );
});

IconMaterialDensityMediumFilled.displayName = 'AmauiIconMaterialDensityMediumFilled';

export default IconMaterialDensityMediumFilled;
