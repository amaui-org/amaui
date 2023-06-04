import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDensitySmallFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DensitySmallFilled'

      short_name='DensitySmall'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 22v-2h18v2Zm0-6v-2h18v2Zm0-6V8h18v2Zm0-6V2h18v2Z"/>
    </Icon>
  );
});

IconMaterialDensitySmallFilled.displayName = 'AmauiIconMaterialDensitySmallFilled';

export default IconMaterialDensitySmallFilled;
